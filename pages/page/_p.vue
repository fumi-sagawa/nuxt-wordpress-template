<template lang="pug">
div
  ul
    li(v-for="post in posts" :key="post.id")
      nuxt-link(:to="`/${post.slug}`") {{post.title}}
  //- div(class="post" v-html="$store.state.posts[12].content")
  Pager
</template>

<script>
import axios from "axios";
export default {
  async asyncData({ params, $config }) {
    const { data } = await axios.get($config.baseUrl);
    //コンテンツ一覧用
    const limit = 10;
    const pagenationNum = params.p;
    const contentsEnd = pagenationNum * limit;
    const contentsStt = contentsEnd - limit;
    const dataSliced = data.slice(contentsStt, contentsEnd);
    return { posts: dataSliced };
  }
};

// console.log(data)
</script>

<style></style>
