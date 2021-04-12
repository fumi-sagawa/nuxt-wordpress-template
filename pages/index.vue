<template lang="pug">
div
  .top
    div.top__text welcome to hogehoge HOMEPAGE!!
    div
      //- p {{posts[0].excerpt}}
    div(class="post" v-html="posts")
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
  async asyncData({}) {
    const { data } = await axios.get(
      `http://www.furetawp.com/wp-json/wp/v2/posts`,
      {
        // headers:{ 'X-API-KEY': $config.apiKey}
      }
    );
    // console.log(data[0].content.rendered);
    return { posts: data[0].content.rendered };
  },
  mounted() {
    console.log(this.posts);
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
