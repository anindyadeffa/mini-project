<template>
<div class="">
    <nav-bar />
    <div class="container">
        <div class="row">
            <h3 class="text-uppercase text-center">Detail Package</h3>
        </div>
        <div class="row">
             <v-breadcrumbs :items="items"></v-breadcrumbs>
        </div>
        <div class="row">
            <h3 class="text-uppercase text-center">Detail Package</h3>
        </div>
    </div>
    <footer-home />
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterHome from '@/components/FooterHome.vue';
export default {
    name: 'DetailPackage',
    components: {
        NavBar,
        FooterHome
    },
    data: () => ({
      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Our Packages',
          disabled: false,
          href: '/package',
        },
        {
          text: 'Detail Package',
          disabled: true,
          href: '/detail-package',
        },
      ],
    }),
}
</script>
