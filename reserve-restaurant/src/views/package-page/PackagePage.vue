<template>
<div class="">
    <nav-bar/>
    <div class="container">
        <div class="row my-5">
            <h3 class="text-center text-uppercase">Our Packages</h3>
        </div>
        <div class="row">
            <div class="col-xl-4 ml-auto">
                <v-text-field v-model="search" @keyup="searchPackage" append-icon="mdi-magnify" label="Search Package" single-line hide-details ></v-text-field>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-md-4 p-5" v-for="data in packages" :key='data.id'>
                <ItemPackage :data="data"/>
            </div>
        </div>
    </div>
    <footer-home/>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import ItemPackage from '@/components/restaurant-package/ItemPackage.vue';
import FooterHome from '@/components/FooterHome.vue';
import axios from 'axios';

export default {
    name: 'PackagePage',
    components: {
        NavBar,
        ItemPackage,
        FooterHome,
    },
    data() {
        return {
            packages: [],
            search: "",
        }
    },
    methods: {
        setPackages(data) {
            this.packages = data;
        },
        searchPackage() {
            axios
                .get('http://localhost:3000/packages?q=' + this.search)
                .then((response) => this.setPackages(response.data))
                .catch((error) => console.log(error))
        }
    },
    mounted() {
        axios
            .get('http://localhost:3000/packages')
            .then((response) => this.setPackages(response.data))
            .catch((error) => console.log(error))
    }
}
</script>
