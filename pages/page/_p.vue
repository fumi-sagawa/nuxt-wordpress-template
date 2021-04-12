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
  async asyncData({params, $config}){
    const page = params.p|| "1"
    const limit = 10
    const {data} = await axios.get(
      `https://fureta.microcms.io/api/v1/blogtest?limit=${limit}&offset=${(page-1)* limit}`,
    {
      headers:{ 'X-API-KEY': $config.apiKey}
    }
    )
    return data
  }
}

// console.log(data)
</script>

<style>
</style>
