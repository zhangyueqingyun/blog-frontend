<script setup lang="ts">
    const {category = {}}: any = defineProps({
        category: Object
    });
</script>

<template>
    <div class="category">{{ category?.name }}</div>
</template>

<style lang="scss" scoped>
    .category {
        // border-radius: 6px;
        // border-width: 1px;
        // border-style:  solid;
        // border-color: #d0d7de;
        border-bottom: 1px solid #d0d7de;
        padding-bottom: 15px;
        margin-bottom: 15px;
    }
</style>