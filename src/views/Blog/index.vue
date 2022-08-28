<script setup lang="ts">
    import BasicLayout from '@/layout/BasicLayout.vue';
    import Blog from './Blog.vue';
    import BreadCrumb from '@/components/BreadCrumb.vue';
</script>

<template>
    <basic-layout>
        <template v-slot:nav>
           <bread-crumb />
        </template>
        <template v-slot>
            <blog></blog>
        </template>
    </basic-layout>
</template>