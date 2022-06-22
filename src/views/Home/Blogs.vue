<script setup lang="ts">
    import Module from './components/Module.vue'
    import BlogCard from './components/BlogCard.vue'

    const {categories}:  any= defineProps({
        categories: Array
    })
</script>

<template>
  <module v-for="category of categories" :key="category.id">
        <template v-slot:left>{{category.name}}</template>
        <template v-slot:default>
            <blog-card
                v-for="blog of category?.blogs"
                :key="blog.id"
                :blog="blog"
            ></blog-card>
        </template>
    </module>
</template>