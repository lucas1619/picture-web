<template>
    <div>
        <pc-header></pc-header>
        <router-view/>
        <pc-footer></pc-footer>
    </div>
</template>
<script>
    import PcHeader from '@/components/PcHeader.vue';
    import PcFooter from '@/components/PcFooter.vue';
    export default {
        name: 'App',
        components: {
            PcHeader,
            PcFooter
        }
    }
</script>
<style>
    @import "./assets/css/tailwind.css";
</style>
