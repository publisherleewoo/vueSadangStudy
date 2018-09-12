<template>
  <div>
    <div class="square" ref="square">
      <div class="spin"></div>
    </div>
    <div @click="popupName('add')">
      <button type="button" data-toggle="modal" data-target="#exampleModal">
        add
      </button>
    </div>
    <table class="table">
      <thead class="bg-primary">
        <tr>
          <th scope="col">no</th>
          <th scope="col">이름</th>
          <th scope="col">전화번호</th>
          <th scope="col">주소</th>
          <th scope="col">사진</th>
          <th>수정/삭제</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contacts" :key="contact.no">
          <td scope="row">{{contact.no}}</td>
          <td>{{contact.name}}</td>
          <td>{{contact.tel}}</td>
          <td>{{contact.address}}</td>
          <td><img @click="updatePhotoPopup(contact)" data-toggle="modal" data-target="#exampleModal" :src="contact.photo" class="img-thumbnail rounded mx-auto d-block"></td>
          <td>
            <div @click="popupName('update',contact)">
              <button type="button" data-toggle="modal" data-target="#exampleModal">
                update
              </button>
            </div>
            <button @click="deleteContact(contact.no)">delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <modalComponent :popupType="popupType" @addContact="addContact" @updateContact="updateContact" @updatePhoto="updatePhoto">
      <div slot="add" v-if="this.popupType==='add'">
        <p>
          <label for="name">이름:</label>
          <input type="text" id="name" :value="currentContact.name" ref="iptName"></p>
        <p>
          <label for="tel">전화번호:</label><input type="text" id="tel" :value="currentContact.tel" ref="iptTel"></p>
        <p>
          <label for="address">주소:</label><input type="text" id="address" :value="currentContact.address" ref="iptAddress"></p>

      </div>

      <div slot="update" v-else-if="this.popupType==='update'">
        <p>
          <label for="no">번호:</label><input type="text" id="no" :value="currentContact.no" readonly></p>
        <p>
          <label for="name">이름:</label><input type="text" id="name" :value="currentContact.name" ref="iptName"></p>
        <p>
          <label for="tel">전화번호:</label><input type="text" id="tel" :value="currentContact.tel" ref="iptTel"></p>
        <p>
          <label for="address">주소:</label><input type="text" id="address" :value="currentContact.address" ref="iptAddress"></p>

      </div>

      <div slot="updatePhoto" v-else>
        <figure>
          <figcaption class="ir">현재 사진</figcaption>
          <img :src="currentContact.photo">
        </figure>
        <label class="ir" for="file">변환사진선택</label>
        <input type="file" id="file">
      </div>
    </modalComponent>
  </div>
</template>

<script>
import modalComponent from "./modalComponent/modal";

export default {
  name: "contactList",
  data() {
    return {
      currentContact: {
        no: "",
        name: "",
        tel: "",
        address: "",
        photo: ""
      },
      contacts: [],
      popupType: ""
    };
  },
  components: { modalComponent },

  created() {
    this.renderGetData();
  },

  methods: {
    currentContactInit() {
      this.currentContact = {
        no: "",
        name: "",
        tel: "",
        address: "",
        photo: ""
      };
    },
    addContact() {
      this.$refs.square.classList.add("on");
      let name = this.$refs.iptName.value;
      if (name !== "") {
        this.$axios
          .post("http://sample.bmaster.kro.kr/contacts", {
            name: this.$refs.iptName.value,
            tel: this.$refs.iptTel.value,
            address: this.$refs.iptAddress.value
          })
          .then(res => {
            $("#exampleModal").modal("hide");
            this.renderGetData();
          })
          .catch(err => {
            console.log("ERROR!!!!!!!!!!!!!!!!!", err);
          });
      } else {
        alert("이름값은 필수입니다");
      }
    },
    renderGetData() {
      this.$axios
        .get("http://sample.bmaster.kro.kr/contacts")
        .then(res => {
          this.contacts = res.data.contacts;
          this.$refs.square.classList.remove("on");
        })
        .catch(err => {
          console.log("ERROR!!!!!!!!!!!!!!!!", err);
        });
    },
    updateContact() {
      this.$refs.square.classList.add("on");
      this.$axios
        .put(
          "http://sample.bmaster.kro.kr/contacts/" + this.currentContact.no,
          {
            name: this.$refs.iptName.value,
            tel: this.$refs.iptTel.value,
            address: this.$refs.iptAddress.value,
            photo: this.$refs.iptPhoto.value
          }
        )
        .then(res => {
          $("#exampleModal").modal("hide");
          this.renderGetData();
        })
        .catch(err => {
          console.log("ERROR!!!!!!!!!!!!!!!!!", err);
        });
    },
    updatePhotoPopup: function(contact) {
      this.popupType = "updatePhoto";
      this.currentContact = contact;
    },
    updatePhoto() {
      var file = document.getElementById("file").files[0];
      var data = new FormData();
      data.append("photo", file);
      this.$axios
        .post(
          "http://sample.bmaster.kro.kr/contacts/" +
            this.currentContact.no +
            "/photo",
          data
        )
        .then(response => {
          $("#exampleModal").modal("hide");
          this.renderGetData();
        })
        .catch(err => {
          console.log("ERROR!!!!!!!!!!!!!!!!!", err);
        });
    },
    deleteContact(no) {
      if(confirm('삭제하실겁니까?')){
      this.$refs.square.classList.add("on");
      this.$axios
        .delete("http://sample.bmaster.kro.kr/contacts/" + no)
        .then(res => {
          $("#exampleModal").modal("hide");
          this.renderGetData();
        })
        .catch(err => {
          console.log("ERROR!!!!!!!!!!!!!!!!!", err);
        });
      }
    },
    popupName(value, contact) {
      this.popupType = value;

      switch (this.popupType) {
        case "add":
          this.currentContactInit();
          break;

        case "update":
          this.currentContact = contact;
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style>
.square.on {
  top: 0px;
  left: 0px;
  position: absolute;
  background: black;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}
.square.on .spin {
  position: fixed;
  z-index: 1;
  left: 50%;
  top: 50%;
  margin-top: -30px;
  margin-left: -30px;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: dashed 5px white;
  -webkit-animation-name: spin;
  -webkit-animation-duration: 1.5s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

table th,
table td {
  vertical-align: middle !important;
}

img.img-thumbnail {
  max-width: 100px;
  cursor: pointer;
}

@media all and (max-width: 680px) {
  table td,
  table th {
    padding: 0 !important;
  }
}
button {
  float: left;
}
input:read-only {
  background: gray;
}

figure img{width:128px; height:128px;}
</style>
