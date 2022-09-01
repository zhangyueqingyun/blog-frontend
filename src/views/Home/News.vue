<script setup lang="ts">
    import BlogCard from '@/components/BlogCard.vue';
    import Module from '@/components/Module.vue';
    import { getNews } from '@/services/home';

    import { onBeforeMount, reactive } from 'vue';
    
    const state: any = reactive({
        categoriedBlogs: undefined
    });

    onBeforeMount(async function() {
        state.categoriedBlogs = await getNews();
    });
</script>

<template>
    <div v-show="state.categoriedBlogs">
        <module v-for="category of state.categoriedBlogs" :key="category?.id">
        <template v-slot:top>{{category.name}}</template>
        <template v-slot:default>
            <blog-card
                v-for="blog of category?.blogs"
                :key="blog.id"
                :blog="blog"
            ></blog-card>
        </template>
        </module>
    </div>
</template>