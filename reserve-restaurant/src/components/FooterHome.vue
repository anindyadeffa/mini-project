<template>
    <div class="">
        <div class="bg-white">
            <hr class="ml-auto mr-auto" width="75%">
            <div class="container">
                <div class="row my-5">
                    <div class="col-sm-2 align-self-center text-center">
                        <b-img :src="require('@/assets/img/logo/icon-logo.svg')" alt="Icon Logo" width="80px"></b-img>
                    </div>
                    <div class="col-sm-5 p-2">
                        <h5 class="font-weigh-bold">About Us</h5>
                        <p class="fs-25">
                            Spoon and Fork is a Contemporary Restaurant creating unique dishes with a focus on local ingredients and inspired by classical training.
                            Located in a Jakarta Central Business District, the main dining room caters to the most unique dining experience.
                            The interior is rich with original architectural details, gleaming hardwood floors, soaring columns, mahogany paneling and antique mirrors.
                        </p>
                    </div>
                    <div class="col-sm-5 p-2">
                        <h5 class="font-weigh-bold">Contact Us</h5>
                        <div>
                            <div class="d-flex mt-1">
                                <font-awesome-icon class="align-self-center" icon="fa-solid fa-house" />
                                <p class="m-2">
                                    12345. Center Jakarta St. Jakarta 123,
                                    <br>
                                    Indonesia
                                </p>
                            </div>
                            <div class="d-flex mt-1">
                                <font-awesome-icon class="align-self-center" icon="fa-solid fa-phone" />
                                <p class="m-2">
                                    +[12] 3456 7890
                                </p>
                            </div>
                            <div class="d-flex mt-1">
                                <font-awesome-icon class="align-self-center" icon="fa-solid fa-envelope" />
                                <a class="a_section_info ml-2" href="mailto: support@spoonandfork.com">
                                    support@spoonandfork.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="color-base footer-tagline">
            <div class="container">
                <div class="row pt-3 pb-0">
                    <div class="col-sm-5">
                        <p class="text-white">
                            &copy; 2022. Anindya Deffa Nabila.
                        </p>
                    </div>
                    <div class="col-sm-2 ml-auto">
                        <p class="text-white">Restaurant Reservation</p>
                    </div>
                </div>
            </div>
		</div>
    </div>
</template>

<script>
export default {
  name: "FooterHome",
}
</script>

<style scoped>
.a_section_info {
    text-decoration: none;
    color: black;
}
</style>