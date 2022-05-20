<template>
    <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="mt-5 pt-5">
        <v-img
          :src="require('@/assets/img/decor/done.jpg')"
          class="my-3"
          contain
          height="150"
        />
      </v-col>

      <v-col class="my-5">
        <h2 class="font-weight-bold mb-3">Successfully !</h2>
        <p>For more information, will be contacted by our customer services !</p>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-btn class="btn-base" href="/">Back To Home</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "CompletedPage",
}
</script>