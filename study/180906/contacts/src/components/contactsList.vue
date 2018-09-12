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
          <td><img :src="contact.photo" class="img-thumbnail rounded mx-auto d-block"></td>
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
    <modalComponent :popupType="popupType" @addContact="addContact" @updateContact="updateContact">
      <p slot="no" v-if="popupType==='update'">
        <label for="no">번호:</label><input type="text" id="no" :value="currentContact.no" readonly></p>
      <p slot="name">
        <label for="name">이름:</label><input type="text" id="name" :value="currentContact.name" ref="iptName"></p>
      <p slot="tel">
        <label for="tel">전화번호:</label><input type="text" id="tel" :value="currentContact.tel" ref="iptTel"></p>
      <p slot="address">
        <label for="address">주소:</label><input type="text" id="address" :value="currentContact.address" ref="iptAddress"></p>
      <p slot="photo" v-if="popupType==='update'">
        <label for="photo">이미지:</label><input type="text" id="photo" :value="currentContact.photo" ref="iptPhoto"></p>
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
    deleteContact(no) {
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
    },
    popupName(value, contact) {
      this.popupType = value;
      if (this.popupType === "add") {
        this.currentContactInit();
      } else {
        this.currentContact = contact;
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
</style>
