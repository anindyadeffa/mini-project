<template>
  <div>
    <!-- <router-link :to=" '/package/' + paket.id "> -->
    <router-link to="/form-reservation">
      <img :src="'assets/images/' + paket.img" alt="" width="100%" />
    </router-link>
    <h5 class="text-center mt-3">{{ paket.name_package }}</h5>
  </div>
</template>

<script>
export default {
  name: "ItemPackage",
  props: ["paket"],
};
</script>
