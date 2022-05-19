<template>
<div class="container">
    <div class="item">
      <router-link class="card" :to="{ name: 'DetailNewsView', params: { title: news.title } }">
        <div class="d-flex">
          <img :src="news.urlToImage" />
          <div class="text-card">
            <div class="author font-weight-bold">{{ news.author }}</div>
            <div class="title font-weight-bold" style="font-size: 18px;">{{ news.title }}</div>
            <div class="desc">{{ news.description }}</div>
            <div class="date-time">{{ news.publishedAt }}</div>
          </div>
        </div>
    </router-link>
    </div>
    <div class="card">
      
    </div>
</div>
</template>

<script>
export default {
  name: "ItemNews",
  props: {
    news: Object,
  },
  mounted () {
        this.$store.dispatch('fetchNewsList');
    },
};
</script>

<style scoped>
</style>
