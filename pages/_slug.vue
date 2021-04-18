<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt">{{ time }}</p>
    <div class="post" v-html="content"></div>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  async asyncData({ params, store }) {
    const pageContent = store.state.posts.find(v => {
      return v.slug === params.slug;
    });
    return pageContent;
  }
};
</script>
