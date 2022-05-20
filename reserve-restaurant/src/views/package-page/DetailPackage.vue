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
            <div class="col-xl-8">
              <div class="card p-3">
                <h4 class="font-weight-bold text-uppercase">{{ paket.name_package }}</h4>
                <p class="text-muted mb-2"></p>
                <div class="text-center">
                  <img :src=" '../assets/images/' + paket.id" alt="">
                </div>
                <div class="mt-3">
                  <h4 class="font-weight-bold my-3" style="color: #F5C234;">About Package</h4>
                  <p>{{ paket.desc }}</p>
                </div>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="card p-3">
                <h4 class="text-center text-uppercase mb-3">Package Information</h4>
                  <table class="#">
                    <tr>
                      <th width="55%"></th>
                      <td width="45%" class="text-right"></td>
                    </tr>
                  </table>
                  <div class="">
                    <a href="/form-reservation" class="btn btn-base btn-block btn-join-now mt-3 py-2">
                        BOOK NOW
                    </a>
                  </div>
                <div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer-home />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterHome from '@/components/FooterHome.vue';
import axios from 'axios'

export default {
    name: 'DetailPackage',
    components: {
        NavBar,
        FooterHome
    },
    data() {
      return {
        paket: [],
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
      }
    },
    method: {
      setPackage(data) {
        this.packages = data;
      }
    },
    mounted() {
      axios
        .get('http://localhost:3000/packages/' + this.$route.params.id)
        .then((response) => this.setPackage(response.data))
        .catch((error) => console.log(error))
    },
}
</script>
