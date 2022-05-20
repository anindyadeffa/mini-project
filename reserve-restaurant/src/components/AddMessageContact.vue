<template>
  <div class="">
    <h3 class="text-center text-uppercase my-5">Contact Us</h3>
    <div class="container p-0">
      <div class="card shadow p-5 m-5">
        <div class="row">
          <div class="col-xl-4 p-5">
            <b-img :src="require('@/assets/img/decor/character-contact-us.png')" class="w-100"></b-img>
          </div>
          <div class="col-xl-8">
              <b-form @submit.prevent="postContact" method="POST">
                <b-form-group class="my-3" label="Your Name :">
                  <b-form-input id="input-name" v-model="contact.name" placeholder="Enter Your name" required></b-form-input>
                </b-form-group>
                
                <b-form-group class="my-3" label="Email address :">
                  <b-form-input id="input-email" v-model="contact.email" type="email" placeholder="Enter Your email" required></b-form-input>
                </b-form-group>

                <b-form-group class="my-3" label="Package :">
                  <b-form-textarea id="textarea" v-model="contact.message" placeholder="Enter Your Message..." rows="3" max-rows="6" required></b-form-textarea>
                </b-form-group>

                <b-button type="submit" class="btn-base px-5">SEND</b-button>
              </b-form>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import { ADD_MESSAGE } from "@/graphql/contact.js";
export default {
  name: "AddMessageContact",
  data() {
    return {
        contact: {
            name: "",
            email: "",
            message: "",
        },
    }
  },
  methods: {
		async postContact() {
      // atributtes
			const name = this.contact.name;
			const email = this.contact.email;
      const message = this.contact.message;
      
      await this.$apollo.mutate({
        mutation: ADD_MESSAGE,
        variables: {  
          name,
          email,
          message
        },
      });
      this.$router.push({ path: '/completed' })
		},
  },
}
</script>