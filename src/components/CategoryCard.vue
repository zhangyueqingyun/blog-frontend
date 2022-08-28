<script setup lang="ts">
    import {computed} from 'vue';

    const {category = {}}: any = defineProps({
        category: Object
    });

    const icon = computed(() => (category.type === 'category' ? 
        {name: "directory", color:"#54aeff"} : 
        {name: "file", color:"#57606a"}
    ))
    const url = computed(() => (category.type === 'category' ? 
        `/category/${category.id}` :
        `/blog/${category.id}`
    ))
</script>

<template>
    <div class="category">
        <svg-icon 
            :name="icon.name" 
            :color="icon.color"
        />
        
        <router-link :to="url">
            <span class="name">
                {{ category?.name }}
            </span>
        </router-link>
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
            color: #333;
            &:hover {
                color: #777;
            }
        }
    }
</style>