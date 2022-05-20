<template>
  <div class="item">
    <img :src="news.urlToImage" />
    <div class="title font-weight-bold text-center">{{ news.title }}</div>
    <div class="author">{{ news.author }}</div>
    <div class="date-time">{{ news.publishedAt }}</div>
    <div class="content">{{ news.content }}</div>
    <div class="url">
      <p>Lanjutkan baca ke: <a target="_blank" :href="news.url">Sini</a></p>
    </div>
    <router-link :to="{ path: '/' }" tag="button">Kembali</router-link>
  </div>
</template>

<script>
export default {
  name: "DetailItemNews",
  props: {
    news: Object,
  },
};
</script>

<style scoped>
  img {
    width: 100%;
    height: 100%;
  }
  .item {
    margin-bottom: 30px;
  }
  .title {
    margin: 30px;
    font-size: 20px;
  }
  .content {
    margin-bottom: 15px;
  }
  .date-time {
    margin-bottom: 15px;
  }
</style>
