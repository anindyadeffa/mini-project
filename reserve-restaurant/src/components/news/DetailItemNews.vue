<template>
  <div class="">
    <div class="container">
      <div class="card p-5">
        <div class="row">
          <h5 class="text-uppercase font-weight-bold">{{ news.title }}</h5>
          <p class="">{{ news.author }}</p>
        </div>
        <div class="row">
          <div class="text-center">
            <img :src="news.urlToImage" class="w-50">
          </div>
        </div>
        <div class="row">
          <p class="font-weifh-bold">{{ news.content }}</p>
        </div>
        <a class="" :href="news.url">
          <button class="btn-base text-uppercase p-2 px-5">View News</button>
        </a>
      </div>
    </div>
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
