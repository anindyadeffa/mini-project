<template>
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="row d-flex">
            <div class="col-md-6 p-2">
              <router-link class="card" :to="{ name: 'DetailNewsView', params: { title: news.title } }" style="text-decoration: none !important;">
                <div class="row d-flex" style="color: black;">
                  <div class="col-sm-6 p-2" >
                    <img :src="news.urlToImage" class="w-100 m-2">
                  </div>
                  <div class="col-sm-6 align-self-center p-2">
                    <h6 class="font-weight-bold">{{ news.title }}</h6>
                    <p class="">{{ news.author }}</p>
                    <a class="" :href="{ name: 'DetailNewsView', params: { title: news.title } }">
                      <button class="btn-base text-uppercase px-5">View More</button>
                    </a>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
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
