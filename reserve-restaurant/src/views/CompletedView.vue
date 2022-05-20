<template>
  <div>
    <nav-bar/>
      <div class="container">
        <Completed/>
      </div>
    <footer-home/>
  </div>
</template>

<script>
import Completed from '@/components/CompletedPage.vue'
import NavBar from '@/components/NavBar.vue'
import FooterHome from '@/components/FooterHome.vue'

  export default {
    name: 'CompletedView',

    components: {
      Completed,
      NavBar,
      FooterHome,
    },
  }
</script>