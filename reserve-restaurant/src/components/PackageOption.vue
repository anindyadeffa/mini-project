<template>
<div class="container">
    <div class="row my-5 py-5">
        <div class="col-xl-7 align-self-center mb-3">
            <h3>Our Packages</h3>
            <p>
                Beberapa pilihan paket atau packages yang dapat dipilih menyesuaikan kebutuhan pengunjung !
            </p>
        </div>
        <div class="col-xl-5 ml-auto px-5">
            <v-carousel hide-delimiters height="600">
                <router-link :to="{ path: '/form-reservation' }">
                    <v-carousel-item v-for="(packageSlide,i) in packageSlides"
                    :key="i"
                    :src="packageSlide.src"
                    ></v-carousel-item>
                </router-link>
            </v-carousel>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data () {
      return {
        packageSlides: [
          {
            src: require('../assets/img/package/1.png'),
          },
          {
            src: require('../assets/img/package/2.png'),
          },
          {
            src: require('../assets/img/package/3.png'),
          },
        ],
      }
    },
}
</script>
