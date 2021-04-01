<template>
  <ul>
    <li v-for="content in contents" :key="content.id">
      <nuxt-link :to="`./posts/${content.id}`">
        {{content.title}}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData(){
    const {data} = await axios.get(
      "https://fureta.microcms.io/api/v1/blogtest",
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
