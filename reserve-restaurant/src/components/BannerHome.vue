<template>
  <v-carousel hide-delimiters height="450">
    <v-carousel-item v-for="(slide,i) in slides"
      :key="i"
      :src="slide.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    data () {
      return {
        slides: [
          {
            src: require('../assets/img/banner/1.jpg'),
          },
          {
            src: require('../assets/img/banner/2.jpg'),
          },
          {
            src: require('../assets/img/banner/3.jpg'),
          },
        ],
      }
    },
}
</script>