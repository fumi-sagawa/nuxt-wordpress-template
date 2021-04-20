<template lang="pug">
div
  h1.name お問い合わせ
  form
    .form-group
      label お名前
      input.form-control(type='text' aria-label='お名前' placeholder="佐川 史弥" v-model='$v.form.name.$model')
      .taxt-danger(v-if="$v.form.name.$error && !$v.form.name.required") 入力が必須の項目です。
      .taxt-danger(v-if="$v.form.name.$error && !$v.form.name.maxLength") お名前は30文字以内で入力してください。
    .form-group
      label メールアドレス
      input.form-control(type='text' aria-label='メールアドレス' placeholder="fureta@example.com" v-model='$v.form.email.$model')
      .taxt-danger(v-if="$v.form.email.$error && !$v.form.email.required") 入力が必須の項目です。
      .taxt-danger(v-if="$v.form.email.$error && !$v.form.email.email") 無効なメールアドレスです。
    .form-group
      label お問い合わせの種類
      select.form-control(aria-label='type' v-model='$v.form.type.$model')
        option(value='null') 選択してください
        option(value='Webサイト製作') Webサイト製作を相談したい
        option(value='その他') その他
      .taxt-danger(v-if="$v.form.type.$error") 部署を選択してください。
    .form-group
      label お問い合わせ内容
      textarea.form-control(type='text' rows='5' aria-label='本文' v-model='$v.form.body.$model')
      .taxt-danger(v-if="$v.form.body.$error && !$v.form.body.required") 本文は100文字以上で入力してください。
      //- .taxt-danger(v-if="$v.form.body.$error && !$v.form.body.minLength") 本文は100文字以上で入力してください。
    label.form-group.form-check
      input.form-check-input(type='checkbox' v-model='$v.form.check.$model')
      |個人情報の取扱に同意します。
    //- .taxt-danger(v-if="$v.form.check.$error") 本文は100文字以上で入力してください。
    button.btn.btn-primary(type='submit' @click.prevent='submit') &#x9001;&#x4FE1;

</template>

<script>
import {
  required,
  email,
  maxLength,
  minLength
} from "vuelidate/lib/validators";
import axios from "axios";

const isChecked = value => {
  return value === true;
};

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        body: "",
        type: null,
        check: false
      }
    };
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("バリデーションエラー");
      } else {
        const form = this.convertJson2Urlencoded(this.form);
        // Base64に変換
        const axiosConfig = {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
          }
        };
        axios
          .post(this.$nuxt.context.$config.postUrl, form, axiosConfig)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      }
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
  },
  validations: {
    form: {
      name: {
        required,
        maxLength: maxLength(30)
      },
      email: {
        required,
        email,
        maxLength: maxLength(50)
      },
      body: {
        required
        // minLength: minLength(100)
      },
      type: { required },
      check: { isChecked }
    }
  }
};
</script>

<style lang="scss" scoped></style>
