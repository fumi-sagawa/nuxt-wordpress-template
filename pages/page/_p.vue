<template lang="pug">
div
  ul
    li(v-for="content in contents" :key="content.id")
      nuxt-link(:to="`/${content.id}`") {{content.title}}
  Paging
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({params}){
    const page = params.p|| "1"
    console.log(params.p)
    console.log(page)
    const limit = 10
    const {data} = await axios.get(
      `https://fureta.microcms.io/api/v1/blogtest?limit=${limit}&offset=${(page-1)* limit}`,
    {
      headers:{ 'X-API-KEY': 'e89c978d-e3b8-4d51-87bc-0bf4b562cb53'}
    }
    )
    return data
  }
}

// console.log(data)
</script>

<style>
</style>
