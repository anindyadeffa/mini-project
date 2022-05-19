<template>
  <div>
      <nav-bar/>
      <banner-home/>
      <div class="container">
        <package-option/>
      </div>
      <!-- <div class="container">
        <div class="row mt-1">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email Address</th>
                <th scope="col">Package</th>
                <th scope="col">Date of Reservation</th>
                <th scope="col">Time of Reservation</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in reservation" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.time }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> -->
      <footer-home/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import BannerHome from '@/components/BannerHome.vue'
import PackageOption from '@/components/PackageOption.vue'
import FooterHome from '@/components/FooterHome.vue'
// import gql from "graphql-tag";

  export default {
    name: 'HomeView',

    components: {
      NavBar,
      BannerHome,
      PackageOption,
      FooterHome,
    },
    // apollo: {
    //   reservation: {
    //     query: gql`
    //       query {
    //         reservation {
    //           id
    //           name
    //           email
    //           type
    //           date
    //           time
    //         }
    //       }
    //     `,
    //     fetchPolicy: "no-cache"
    //   },
    // },
    // data() {
    //   return {
    //     reservation: []
    //   };
    // }
  };
</script>