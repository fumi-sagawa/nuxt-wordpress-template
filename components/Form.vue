<template lang="pug">
  div.contact-form
    .form-content 
      label.required 名前
      input(
        v-model="formData.yourName"
        type="text" 
        name="yourName" 
        required 
        autocomplete="name"
      )
    .form-content 
      label.required メールアドレス
      input(
        v-model="formData.yourEmail"
        type="text" 
        class="form-control" 
        name="yourEmail" 
        required 
        autocomplete="email"
      )
    .form-content 
      label 題名
      input(
        v-model="formData.subject"
        type="text" 
        class="form-control" 
        name="subject" 
      )
    .form-content 
      label お問い合わせ内容
      textarea(
        v-model="formData.message"
        class="form-control" 
        name="message" 
      )

    button(@click="submit") 送信！

</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        yourName: "",
        yourEmail: "",
        subject: "",
        message: ""
      }
    };
  },
  methods: {
    submit() {
      const formData = this.convertJson2Urlencoded(this.formData);
      // Base64に変換
      const axiosConfig = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        }
      };

      axios
        .post(this.$nuxt.context.$config.postUrl, formData, axiosConfig)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    convertJson2Urlencoded(obj) {
      let str = [];
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          str.push(
            encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
          );
        }
      }
      return str.join("&");
    }
  }
};
</script>

<style lang="scss" scoped></style>
