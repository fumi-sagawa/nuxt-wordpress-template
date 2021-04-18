<template lang="pug">
.paging
  .paging-list
    nuxt-link(to="/") home
    nuxt-link(to="/page/1") page1
    nuxt-link(to="/page/2") page2
    p {{paging}}
    //- ul
    //-   li(v-for="post in posts" :key="post.id")
    //-     nuxt-link(:to="`/${post.slug}`") {{post.title}}
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      paging: []
    };
  },
  mounted() {
    const { data } = await axios.get($config.baseUrl);
    console.log(data);
    console.log(this.paging);
    return {paging:data}
  }
};
</script>

<style lang="scss" scoped>
.paging {
  padding: 100px 0;
  display: grid;
  justify-content: center;
  &-list {
    display: grid;
    grid-auto-flow: column;
    column-gap: 20px;
  }
}
a {
  font-size: 20px;
}
</style>
