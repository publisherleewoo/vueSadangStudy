<template>
  <div>
    <div @click="popupName('add')">
      <btnComponent btnTitle="add" :popupType="popupType" @eventTrigger="renderGetData"></btnComponent>
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
        <tr v-for="(contact,i) in contacts" :key="contact.no">
          <td scope="row">{{contact.no}}</td>
          <td>{{contact.name}}</td>
          <td>{{contact.tel}}</td>
          <td>{{contact.address}}</td>
          <td>{{i}}<img :src="contact.photo" class="img-thumbnail rounded mx-auto d-block"></td>
          <td>
            <div @click="popupName('update',contact.no)">
             <btnComponent btnTitle="update" :popupType="popupType" @eventTrigger="renderGetData"></btnComponent>
              <button>삭제</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>
import btnComponent from "./btnComponent/btnComponent";
 
export default {
  name: "C",
  data() {
    return {
      contacts: [],
      popupType: ""
    };
  },
  components: { btnComponent },
  props:['btnTitle'],
  created() {
    this.renderGetData();
  },
  methods: {
    popupName(value, i) {
      this.popupType = value;
    },
    renderGetData() {
      this.$axios
        .get("http://sample.bmaster.kro.kr/contacts/")
        .then(res => {
          this.contacts = res.data.contacts;
        })
        .catch(err => {
          console.log("ERROR!!!!!!!!!!!!!!!!", err);
        });
    }
  }
};
</script>

<style>
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
</style>
