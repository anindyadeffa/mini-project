<template>
  <div class="mt-5 pt-5">
    <nav-bar/>
    <div class="news-wrapper">
      <h1 class="text-center text-uppercase">News</h1>
      <ItemNews
        v-for="(data, index) in getNewsFromState"
        :key="index"
        :news="data"
      />
    </div>
    <!-- <div class="container">
          <h1>Form Contact</h1>
        <div class="row mt-1">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">email</th>
                <th scope="col">message</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in contact" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.message }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> -->
      <footer-home/>
  </div>
</template>

<script>
import ItemNews from "@/components/news/ItemNews.vue";
import gql from "graphql-tag";
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
  apollo: {
    contact: {
      query: gql`
        query {
          contact {
            id
            name
            email
            message
          }
        }
      `,
      fetchPolicy: "no-cache"
    },
  },
  data() {
    return {
      contact: []
    };
  }
};
</script>

<style scoped>
  .text-center {
    text-align: center;
  }
</style>
