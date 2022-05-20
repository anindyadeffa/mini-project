<template>
    <div class="container p-5">
        <div class="row mt-1">
            <v-data-table :headers="headers" :items="reservation" :items-per-page="5" class="elevation-1"></v-data-table>
        </div>
    </div>
</template>

<script>
import gql from "graphql-tag";
export default {
    name: 'DashboardView',
    apollo: {
      reservation: {
        query: gql`
          query {
            reservation {
              id
              name
              email
              type
              date
              time
            }
          }
        `,
        fetchPolicy: "no-cache"
      },
    },
    data() {
      return {
        reservation: [],
        headers: [
            {
                text: 'ID',
                align: 'start',
                sortable: false,
                value: 'id',
            },
            { text: 'Name', value: 'name' },
            { text: 'Email Address', value: 'email' },
            { text: 'Package', value: 'type' },
            { text: 'Date of Reservation', value: 'date' },
            { text: 'TIme of Reservation', value: 'time' },
        ],
      };
    }
}
</script>
