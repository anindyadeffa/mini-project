<template>
  <div class="about">
    <h3 class="text-center text-uppercase my-5">Form Reservations</h3>
    <div class="container">
      <div class="card shadow p-5 m-5">
        <b-form @submit.prevent="reservation" method="POST">
          <b-form-group class="my-3" label="Your Name :">
            <b-form-input id="input-name" v-model="form.name" placeholder="Enter Your name" required></b-form-input>
          </b-form-group>
          
          <b-form-group class="my-3" label="Email address :">
            <b-form-input id="input-email" v-model="form.email" type="email" placeholder="Enter Your email" required></b-form-input>
          </b-form-group>

          <b-form-group class="my-3" label="Package :">
            <b-form-input id="input-type" v-model="form.type" placeholder="Enter Your Package's Option" required></b-form-input>
          </b-form-group>

          <b-form-group class="my-3" for="datepicker" label="Choose a date">
              <b-form-datepicker id="datepicker" v-model="form.date" class="mb-2"></b-form-datepicker>
          </b-form-group>

          <b-form-group class="my-3" for="timepicker" label="Choose a time">
              <b-form-timepicker id="timepicker" v-model="form.time"></b-form-timepicker>
          </b-form-group>

          <b-button type="submit" class="btn-base text-uppercase px-5">Submit</b-button>
        </b-form>
    </div>
  </div>
</div>
</template>

<script>
import { ADD_RESERVATION } from "@/graphql/reservation.js";
export default {
  name: "AddReservation",
  data() {
    return {
        form: {
            name: "",
            email: "",
            type: "",
            date: "",
            time: "",
        },
    }
  },
  methods: {
		async reservation() {
      // atributtes
			const name = this.form.name;
			const email = this.form.email;
			const type = this.form.type;
			const date = this.form.date;
			const time = this.form.time;

      await this.$apollo.mutate({
        mutation: ADD_RESERVATION,
        variables: {
          name,
          email,
          type,
          date,
          time,
        },
			});
			this.$router.push({ path: "/completed" });
		},
  },
}
</script>