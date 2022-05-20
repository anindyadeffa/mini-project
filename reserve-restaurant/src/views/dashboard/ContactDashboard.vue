<template>
    <div class="container p-5">
        <div class="row mt-1">
            <v-data-table :headers="headers" :items="contact" :items-per-page="5" class="elevation-1"></v-data-table>
        </div>
    </div>
</template>

<script>
import gql from "graphql-tag";
export default {
    name: 'ContactDashboard',
    apollo: {
        contact: {
            query: gql`
                query {
                  contact {
                      id
                      name
                      email
                      message
                  }
                }
            `,
            fetchPolicy: "no-cache"
        },
    },
    data() {
      return {
        contact: [],
        headers: [
            {
                text: 'ID',
                align: 'start',
                sortable: false,
                value: 'id',
            },
            { text: 'Name', value: 'name' },
            { text: 'Email Address', value: 'email' },
            { text: 'Message', value: 'message' },
        ],
      };
    }
}
</script>
