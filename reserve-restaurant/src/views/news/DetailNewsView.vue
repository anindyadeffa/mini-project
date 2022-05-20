<template>
<div class=" my-5">
  <nav-bar/>
  <div class="news-wrapper">
    <h3 class="text-center text-uppercase my-5">Detail News</h3>
    <DetailItemNews :news="detailNews"/>
  </div>
  <footer-home/>
</div>
</template>

<script>
import DetailItemNews from "@/components/news/DetailItemNews.vue";
import FooterHome from '@/components/FooterHome.vue';
import NavBar from '@/components/NavBar.vue';

export default {
  name: "DetailNewsView",
  components: {
    DetailItemNews,
    FooterHome,
    NavBar
  },
  data() {
    return {
      data: {
        title: "test",
      }
    }
  },
  mounted() {},
  computed: {
    detailNews() {
      const detail = this.$store.state.news.lists.filter(
        (value) => value.title === this.$route.params.title
      )
      console.log("detail: ", detail)
      return detail[0];
    }
  },
  methods: {},
};
</script>
