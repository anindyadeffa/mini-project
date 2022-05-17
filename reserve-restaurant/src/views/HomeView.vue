<template>
  <div>
      <banner-home/>
      <div class="container">
        <package-option/>
      </div>
      <footer-home/>
  </div>
</template>

<script>
import BannerHome from '@/components/BannerHome.vue'
import PackageOption from '@/components/PackageOption.vue'
import FooterHome from '@/components/FooterHome.vue'

  export default {
    name: 'HomeView',

    components: {
      BannerHome,
      PackageOption,
      FooterHome,
    },
  }
</script>