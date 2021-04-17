<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt">{{ time }}</p>
    <div class="post" v-html="content"></div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  async asyncData({ params, $config }) {
    const { data } = await axios.get($config.baseUrl, {
      // headers: { "X-API-KEY": $config.apiKey }
    });
    //dataの中からURLに相当するもの(slug)を抽出
    const pageContent = data.find(singlePage => {
      return singlePage.slug === params.slug;
    });
    console.log($config.baseUrl);
    return pageContent;
  }
};
</script>
