<template lang="pug">
div
  ul
    li(v-for="post in posts" :key="post.id")
      nuxt-link(:to="`/${post.slug}`") {{post.title}}
  Paging
</template>

<script>
import axios from "axios";
export default {
  async asyncData({ params, $config }) {
    // const page = params.p|| "1"

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
