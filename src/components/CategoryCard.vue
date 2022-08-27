<script setup lang="ts">
    const {category = {}}: any = defineProps({
        category: Object
    });

    import {computed} from 'vue';
    const icon = computed(() => (category.type === 'category' ? 
        {name: "directory", color:"#54aeff"} : 
        {name: "file", color:"#57606a"}
    ))
</script>

<template>
    <div class="category">
        <svg-icon :name="icon.name" :color="icon.color" />
        <span class="name">{{ category?.name }}</span>
    </div>
</template>

<style lang="scss" scoped>
    .category {
        display: flex;
        border-bottom: 1px solid #d0d7de;
        padding-bottom: 9px;
        margin-bottom: 9px;
        font-size: 14px;
        align-items: center;
        .name {
            margin-left: 8px;
            cursor: pointer;
            transition: color 0.3s;
            &:hover {
                color: #777;
            }
        }
    }
</style>