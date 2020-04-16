<template lang="pug">
    ul.bg-back_color.w-full.text-center.text-gray-600.font-medium
        li.text-xl(v-for="i in navBarData" @click="goToLink(i.link)")
            div.flex.justify-center.items-center.border-b-2.py-4(@click="ShowCategories(i.id)")
                p {{ i.title }}
                i.fal.fa-chevron-down.ml-2(v-if="i.categories")
            ul(v-if="i.categories")
                li(v-for="j in i.categories" v-show="i.id === objectId" @click="goToLink(j.link)")
                    div.flex.justify-center.items-center.py-4.border-b-2(@click="ShowSubCategories(j.id)")
                        p {{j.title}}
                        i.fal.fa-chevron-down.ml-2(v-if="j.subcategories")
                    ul(v-if="j.subcategories")
                        li.py-2.border-b-2(v-for="k in j.subcategories" v-show="j.id === categoriesId" @click="goToLink(k.link)") {{ k.title }}
</template>

<script>
    export default {
        name: "PcOptionsNav",
        props:{
            navBarData: {
                type: Object,
                required: true
            },
        },
        data(){
            return{
                objectId: null,
                categoriesId: null
            }
        },
        methods:{
            ShowCategories(objectId){
                this.objectId = objectId;
            },
            ShowSubCategories(categoriesId){
                this.categoriesId = categoriesId;
            },
            goToLink(link){
                if (link){
                    this.categoriesId = -1;
                    this.objectId = -1;
                    this.$emit('golink', link);
                }
            }
        }
    }
</script>

<style scoped>

</style>