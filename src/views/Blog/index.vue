<script setup lang="ts">
    import BasicLayout from '@/layout/BasicLayout.vue';
    import BreadCrumb from '@/components/BreadCrumb.vue';
    import Blog from './Blog.vue'
    import Loading from '@/components/Loading.vue';

    import {reactive, onBeforeMount} from 'vue'
    import {useRoute} from 'vue-router'
    import { getBlogById, readBlog } from '@/services/blog'

    const route = useRoute()

    const state: any = reactive({
        blog: undefined
    })

    onBeforeMount(async function() {
        state.blog = await getBlogById(route.params.id)
    })

    onBeforeMount(async function() {
        readBlog(route.params.id)
    })
</script>

<template>
    <loading :visible="!state.blog" />
    <basic-layout v-show="state.blog">
        <template v-slot:nav>
            <bread-crumb />
        </template>
        <template v-slot>
            <keep-alive>
                <blog :blog="state.blog"></blog>
            </keep-alive>
        </template>
    </basic-layout>
</template>