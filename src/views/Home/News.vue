<script setup lang="ts">
    import BlogCard from '@/components/BlogCard.vue';
    import Module from '@/components/Module.vue';
    
    const props: any = defineProps({
        categoriedBlogs: []
    })
</script>

<template>
    <div v-show="props.categoriedBlogs">
        <module v-for="category of props.categoriedBlogs" :key="category?.id">
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