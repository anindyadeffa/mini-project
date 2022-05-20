<template>
    <div>
        <router-link :to=" '/package/' + data.id ">
            <img :src="'assets/images/' + data.img" alt="" width="100%">
        </router-link>
        <h5 class="text-center mt-3">{{ data.name_package }}</h5>
    </div>
</template>

<script>
export default {
    name: 'ItemPackage',
    props: ['data'],
}
</script>
