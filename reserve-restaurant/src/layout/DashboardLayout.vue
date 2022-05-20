<template>
    <v-card class="mx-auto" height="100%">
        <v-app-bar color="cyan" dark >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

            <v-toolbar-title>Dashboard</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense >
                <v-list-item-group v-model="group" active-class="cyan--text text--accent-4" >
                    <v-list-item href="/dashboard">
                        <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item href="/dashboard/package-dashboard">
                        <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Reservation</v-list-item-title>
                    </v-list-item>

                    <v-list-item href="/dashboard/contact-dashboard">
                        <v-list-item-icon>
                        <v-icon>mdi-newspaper</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Contact</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-card>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),
  }
</script>