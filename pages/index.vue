<template lang="pug">
div
  .top
    div.top__text welcome to hogehoge HOMEPAGE!!
    div
    div(class="post" v-html="posts[12].content")
    div(class="post" v-html="$store.state.posts[12].content")
  Paging
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      posts: []
    };
  },
  async asyncData({ $config }) {
    const { data } = await axios.get($config.baseUrl);
    return { posts: data };
  },
  mounted() {
    this.getPosts(this.$config.baseUrl);
    // console.log(this.posts);
  },
  methods: {
    ...mapActions({
      getPosts: "getPosts"
    })
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
