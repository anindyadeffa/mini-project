<template>
  <div>
      <div class="container">
        <add-reservation/>
      </div>
      <footer-home/>
  </div>
</template>

<script>
import AddReservation from '@/components/AddReservation.vue'
import FooterHome from '@/components/FooterHome.vue'

  export default {
    name: 'HomeView',

    components: {
      AddReservation,
      FooterHome,
    },
  }
</script>