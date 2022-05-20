<template>
    <div class="">
        <nav-bar/>
        <div class="container">
            <div class="row p-5 my-5">
                <div class="col-xl-12 card shadow my-5 py-5">
                    <div class="container">
                        <!-- Nested Row within Card Body -->
                        <div class="row justify-content-center m-5">
                            <div class="col-xl-6">
                                <b-img :src="require('@/assets/img/decor/character-login.png')" class="w-100"></b-img>
                            </div>
                            <div class="col-xl-6 align-self-center ml-auto">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                </div>
                                <form class="login">
                                    <div class="form-group my-2 mx-5">
                                        <input class="form-control form-control-user" type="text" v-model="input.username" placeholder="Enter Your Username" required>
                                    </div>
                                    <div class="form-group my-2 mx-5">
                                        <input class="form-control form-control-user" type="password" v-model="input.password" placeholder="Enter Your Password" required>
                                    </div>
                                    <div class="text-center">
                                        <button class="btn btn-base btn-block ml-auto px-5" @click="login()">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
    export default {
        name: 'LoginView',
        components: {
            NavBar
        },
        data() {
            return {
                input: {
                    username: "",
                    password: "",
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == "admin"  && this.input.password =="admin") {
                        this.$router.push({ path: "/dashboard" });
                    } else {
                    alert("The username or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    };
    </script>