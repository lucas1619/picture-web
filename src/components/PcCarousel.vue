<template>
    <section>
        <carousel :items="1">
            <div v-for="i in [1,2,3]" :key="i">
                <h2 :class="(i ===2) ?'bg-color_product_two' : (i === 3)?'bgcolor_product_three':'bg-color_product_one'">OFERTAS PERMANENTES</h2>
                <picture>
                    <source srcset="https://via.placeholder.com/1440x655" media="(min-width: 850px)">
                    <img class="w-screen" src="https://via.placeholder.com/850x550">
                </picture>
            </div>
        </carousel>
    </section>
</template>

<script>
    import carousel from 'vue-owl-carousel'
    export default {
        components: {
            carousel
        },
        data(){
            return{
            }
        },
        name: "PcCarousel"
    }
</script>

<style scoped>

</style>