<template lang="pug">
.paging
  ul.paging-list
    li: nuxt-link(to="/") home
    li(v-for="pager in pagers")
      nuxt-link(:to="`/page/${pager}`") {{pager}}
</template>

<script>
export default {
  data() {
    return {
      pagers: []
    };
  },
  async fetch() {
    const posts = await fetch(this.$nuxt.context.$config.baseUrl).then(res =>
      res.json()
    );
    const limit = 10;
    const pagerLength = Object.keys(posts).length;
    this.pagers = Math.ceil(pagerLength / limit);
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

ul {
  display: grid;
  grid-auto-flow: column;
  column-gap: 30px;
}
</style>
