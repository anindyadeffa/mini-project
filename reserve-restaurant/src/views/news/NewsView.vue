<template>
  <div class="my-5">
    <nav-bar/>
    <div class="news-wrapper">
      <h3 class="text-center text-uppercase my-5">News</h3>
      <ItemNews
        v-for="(data, index) in getNewsFromState"
        :key="index"
        :news="data"
      />
    </div>
    <footer-home/>
  </div>
</template>

<script>
import ItemNews from "@/components/news/ItemNews.vue";
import NavBar from '@/components/NavBar.vue';
import FooterHome from '@/components/FooterHome.vue';

export default {
  name: "NewsView",
  components: {
    ItemNews,
    NavBar,
    FooterHome
  },
  mounted() {
    this.getNews();
  },
  computed: {
    getNewsFromState() {
      return this.$store.state.news.lists;
    },
  },
  methods: {
    getNews() {
      // news/fetchListNews
      this.$store.dispatch("news/fetchListNews");
    },
  },
};
</script>

<style scoped>
  .text-center {
    text-align: center;
  }
</style>
