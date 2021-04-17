<template lang="pug">
div
  .top
    div.top__text welcome to hogehoge HOMEPAGE!!
    div
    //- div(class="post" v-html="posts[12].content")
    div(class="post" v-html="$store.state.posts[12].content")
  Paging
</template>

<script></script>

<style scoped>
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
}
</style>
