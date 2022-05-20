<template>
  <div>
      <nav-bar/>
      <banner-home/>
      <div class="container">
        <package-home/>
      </div>
      <footer-home/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import BannerHome from '@/components/BannerHome.vue'
import PackageHome from '@/components/PackageHome.vue'
import FooterHome from '@/components/FooterHome.vue'

  export default {
    name: 'HomeView',

    components: {
      NavBar,
      BannerHome,
      PackageHome,
      FooterHome,
    },
  };
</script>