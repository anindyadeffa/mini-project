<template>
  <b-navbar toggleable="md" color="white" shadow class="p-0 m-0">
    <b-container>

    <b-navbar-brand href="/">
      <b-img :src="require('@/assets/img/logo/icon-logo.svg')" alt="Icon Logo" width="38px" class="m-0"></b-img>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="mt-2" href="/">Home</b-nav-item>
          <b-nav-item class="mt-2" href="/package">Package</b-nav-item>
          <b-nav-item class="mt-2" href="/news">News</b-nav-item>
          <b-nav-item class="mt-2" href="/contact">Contact</b-nav-item>
          <b-nav-item href="/login">
            <b-button type="submit" class="btn-base btn-login">Login</b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
  export default {
    name: 'NavBar',
  }
</script>

<style scoped>
.nav-item {
  margin: 0 15px 0 15px;
}
.btn-login {
  size: 10%;
}
</style>
