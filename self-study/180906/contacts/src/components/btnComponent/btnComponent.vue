<template>
  <div>
    <!-- Button trigger modal -->

    <button type="button" class="btn btn-secondary btn-lg active" data-toggle="modal" data-target="#exampleModal">
      {{btnTitle}}
    </button>

    <modalComponent :btnTitle="btnTitle" :popupType="popupType" @addContact="addContact">
      <p slot="no"  v-if="popupType==='update'">번호:<input type="text" v-model="contact.no"></p>
      <p slot="name">이름:<input type="text" v-model="contact.name"></p>
      <p slot="tel">전화번호:<input type="text" v-model="contact.tel"></p>
      <p slot="address">주소:<input type="text" v-model="contact.address"></p>
      <p slot="img" v-if="popupType==='update'">이미지<input type="text" v-model="contact.img"></p>
    </modalComponent>
  </div>
</template>

<script>
import modalComponent from "../modalComponent/modal.vue";
export default {
  name: "btnComponent",
  data() {
    return {
      contact: {
        no:"",
        name: "",
        tel: "",
        address: "",
        img: ""
      }
    };
  },
  props: ["btnTitle", "popupType","index"],
  components: { modalComponent },

  methods: {
    addContact() {
      let name = this.name;
      let tel = this.tel;
      let address = this.address;

      if (name !== "" && tel !== "" && address != "") {
        this.$axios
          .post("http://sample.bmaster.kro.kr/contacts", {
            name: name,
            tel: tel,
            address: address
          })
          .then(res => {
            $("#exampleModal").modal("hide");
            this.$emit("eventTrigger");
          })
          .catch(err => {
            console.log("ERROR!!!!!!!!!!!!!!!!!", err);
          });
      } else {
        alert("값이 비었습니다");
      }
    }
  }
};
</script>
<style>
button {
  float: left;
  border: 0;
}
</style>
