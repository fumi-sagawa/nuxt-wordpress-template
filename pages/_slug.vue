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
    const { data } = await axios.get($config.baseUrl);
    const pageContent = data.find(v => {
      return v.slug === params.slug;
    });
    return pageContent;
  }
};
</script>
