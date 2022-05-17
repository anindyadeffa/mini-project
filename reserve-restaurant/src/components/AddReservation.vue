<template>
  <div class="about">
    <h3 class="text-center my-5">Form Reservations</h3>
    <div class="container">
      <div class="card shadow p-5 m-5">
        <b-form @submit.prevent="submit" method="POST">
          <b-form-group class="my-3" label="Your Name :">
            <b-form-input id="input-name" v-model="form.name" placeholder="Enter Your name" required></b-form-input>
          </b-form-group>
          
          <b-form-group class="my-3" label="Email address :">
            <b-form-input id="input-email" v-model="form.email" type="email" placeholder="Enter Your email" required></b-form-input>
          </b-form-group>

          <b-form-group class="my-3" label="Package :">
              <b-form-select v-model="form.package" :options="options" required></b-form-select>
          </b-form-group>

          <b-form-group class="my-3" for="datepicker" label="Choose a date">
              <b-form-datepicker id="datepicker" v-model="form.date" class="mb-2"></b-form-datepicker>
          </b-form-group>

          <b-form-group class="my-3" for="timepicker" label="Choose a time">
              <b-form-timepicker id="timepicker" v-model="form.time"></b-form-timepicker>
          </b-form-group>

          <b-button type="submit" @click="submit" v-on:click="submitAlert" class="mt-5" variant="primary">Submit</b-button>
        </b-form>
    </div>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
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
            package: null,
            date: "",
            time: "",
        },
        options: [
            { value: null, text: 'Please select one package' },
            { value: 'Private Package', text: 'Private Package (2-5 Pax)' },
            { value: 'Family Package', text: 'Family Package (6-10 Pax)' },
            { value: 'Gathering Package', text: 'Gathering Package (11-20 Pax)' }
        ],
    }
  },
  methods: {
    submit() {
      const { name, email, options, date, time } = this.$data;
      this.$apollo.mutate({
        mutation: ADD_RESERVATION,
        variables: {
          name,
          email,
          options,
          date,
          time
        },
        refetchQueries: ["getReservation"]
      });
      this.form.name = "";
      this.form.email = "";
      this.form.package = "";
      this.form.date = "";
      this.form.time = "";
    },
    submitAlert: () => {
        alert('Reservation Sucessfully, For more information, will be contacted by our customer services !')
    }
  },
//   methods: {
// 		async reservation() {
//       // atributtes
// 			const name = this.form.name;
// 			const email = this.form.email;
// 			const package = this.form.package;
// 			const date = this.form.date;
// 			const time = this.form.time;

// 			await this.$apollo.mutate({
//         mutation: ADD_RESERVATION,
//         variables: {
//           name,
//           email,
//           package,
//           date,
//           time,
//         },
// 			});
// 			this.$router.push({ path: "/" });
// 		},
//   },
}
</script>