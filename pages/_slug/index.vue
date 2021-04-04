<template lang="pug">
  main.main
    h1.title {{title}}
    p.publishedAt {{publishedAt}}
    .post(v-html="body")
</template>

<script>
import axios from'axios'

export default {
  async asyncData({params}){
    const {data} = await axios.get(
      `https://fureta.microcms.io/api/v1/blogtest/${params.slug}`,
      {
        headers:{ 'X-API-KEY': 'e89c978d-e3b8-4d51-87bc-0bf4b562cb53'}
      }
    )
    return data
  }
}
</script>

<style lang="scss">
.main {
  width: 960px;
  margin: 0 auto;
}

.title {
  margin-bottom: 20px;
}

.publishedAt {
  margin-bottom: 40px;
}

.post {
  & > h1 {
    font-size: 30px;
    font-weight: bold;
    margin: 40px 0 20px;
    background-color: #eee;
    padding: 10px 20px;
    border-radius: 5px;
  }

  & > h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 40px 0 16px;
    border-bottom: 1px solid #ddd;
  }

  & > p {
    line-height: 1.8;
    letter-spacing: 0.2px;
  }

  & > ol {
    list-style-type: decimal;
    list-style-position: inside;
  }
}
</style>