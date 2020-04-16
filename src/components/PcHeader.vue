<template lang="pug">
    header.bg-white.mx-auto.flex.flex-col.justify-center.items-center.fixed.z-10.w-full
        div.w-full.py-4.border-b.border-gray-200
            img.mx-auto(src="https://via.placeholder.com/125x20" alt="logo")
        div.flex.w-full.py-4.text-2xl
            div.text-center.border-r.border-gray-200(class="w-1/3")
                i.fal.fa-search
            div.text-center.border-r.border-gray-200.text-2xl(class="w-1/3")
                i.fal.fa-user
            div.text-center(class="w-1/3" @click="showOptions")
                i.fal.fa-bars
        pc-options-nav(v-if="showNavOptions" :nav-bar-data="navigationData" @golink="ByeOptions")
</template>
<script>
    const navigation = {
        productos: {
            id: 1,
            title: 'Productos',
            categories:[
                {
                    id: 1,
                    title: 'Fotolibros',
                    subcategories: [
                        {
                            title: 'FOTOLIBRO CLASICO',
                            link: '/producto/1'
                        },
                        {
                            title: 'FOTOLIBRO CLASICO',
                            link: '/producto/1'
                        },
                        {
                            title: 'FOTOLIBRO CLASICO',
                            link: '/producto/1'
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'Fotolibros',
                    subcategories: [
                        {
                            title: 'FOTOLIBRO CLASICO',
                            link: '/producto/1'
                        },
                        {
                            title: 'FOTOLIBRO CLASICO',
                            link: '/producto/1'
                        },
                        {
                            title: 'FOTOLIBRO CLASICO',
                            link: '/producto/1'
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'Fotolibros',
                    subcategories: [
                        {
                            title: 'FOTOLIBRO CLASICO',
                            link: '/producto/1'
                        },
                        {
                            title: 'FOTOLIBRO CLASICO',
                            link: '/producto/1'
                        },
                        {
                            title: 'FOTOLIBRO CLASICO',
                            link: '/producto/1'
                        }
                    ]
                },
                {
                    id: 4,
                    title: 'Fotolibros',
                    subcategories: [
                        {
                            title: 'FOTOLIBRO CLASICO',
                            link: '/producto/1'
                        },
                        {
                            title: 'FOTOLIBRO CLASICO',
                            link: '/producto/1'
                        },
                        {
                            title: 'FOTOLIBRO CLASICO',
                            link: '/producto/1'
                        }
                    ]
                }
            ]
        },
        promociones: {
            id: 2,
            title:'PROMOCIONES',
            link: '/promociones'
        },
        inspiraciones: {
            id: 3,
            title:'Inspiraciones',
            link: '/inspiraciones'
        },
        ayuda: {
            id: 4,
            title:'Centro de Ayuda',
            link: '/ayuda'
        }
    };
    import PcOptionsNav from "@/components/PcOptionsNav";
    export default {
        components: {
            PcOptionsNav
        },
        data(){
            return{
                navigationData: {},
                firstShowNavOptions: false,
                showNavOptions:false,
            }
        },
        methods:{
            showOptions(){
                if(!this.firstShowNavOptions){
                    this.navigationData = navigation;
                    this.firstShowNavOptions = true;
                }
                this.showNavOptions = !this.showNavOptions;
            },
            ByeOptions(link){
                this.showNavOptions = false;
                this.$router.push(link);
            }
        },
        name: "PcHeader"
    }
</script>
<style>
    
</style>