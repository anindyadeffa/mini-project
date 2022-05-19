<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@font-face {
  font-family: "Nunito";
  src: local("Nunito"),
    url(@/assets/fonts/Nunito-Regular.ttf) format("truetype");
}
.color-base {
  background-color: #3C3B50;
}
.btn-base {
  color: #fff !important;
  background-color: #3C3B50 !important;
  border-color: #3C3B50 !important;
  border-radius: 20px !important;
}
</style>
