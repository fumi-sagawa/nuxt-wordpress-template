<template lang="pug">
.paging
  .paging-list
    nuxt-link(to="/") home
    nuxt-link(to="/page/1") page1
    nuxt-link(to="/page/2") page2
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.paging {
  padding: 100px 0;
  display: grid;
  justify-content: center;
  &-list{
    display: grid;
    grid-auto-flow: column;
  }
}
a {
  font-size: 20px;
}
</style>