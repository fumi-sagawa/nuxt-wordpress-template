<template lang="pug">
div
  .top
    div.top__text welcome to hogehoge HOMEPAGE!!
    div
    div(class="post" v-html="posts[12].content")
  Paging
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: []
    };
  },
  async asyncData({ $config }) {
    const { data } = await axios.get($config.baseUrl);
    return { posts: data };
  }
};
</script>

<style scoped>
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
}
</style>
