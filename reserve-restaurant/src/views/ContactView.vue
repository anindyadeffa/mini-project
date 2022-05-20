<template>
  <div>
    <nav-bar/>
      <div class="container">
        <add-message-contact/>
      </div>
    <footer-home/>
  </div>
</template>

<script>
import AddMessageContact from '@/components/AddMessageContact.vue'
import NavBar from '@/components/NavBar.vue';
import FooterHome from '@/components/FooterHome.vue';

  export default {
    name: 'HomeView',

    components: {
        AddMessageContact,
        NavBar,
        FooterHome
    },
  };
</script>