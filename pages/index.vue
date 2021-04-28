<template lang="pug">
div
  .top
    div.top__text welcome to hogehoge HOMEPAGE!!
    //- img(src="images/ocean-3605547.jpg")
    nuxt-img(provider="static" src="images/ocean-3605547.jpg" format="webp" quality="30")
    div
  Pager
  .formWrapper
    ContactForm
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
.formWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

img,
nuxt-img {
  width: 100%;
  height: auto;
}
</style>
