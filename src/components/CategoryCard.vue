<script setup lang="ts">
    import {computed} from 'vue';

    const {category = {}}: any = defineProps({
        category: Object
    });

    const icon = computed(() => (category.type === 'category' ? 
        {name: "directory", color:"#CC9999"} : 
        {name: "file", color:"#CC9999", background: '#fff'}
    ))
    const url = computed(() => (category.type === 'category' ? 
        `/category/${category.id}` :
        `/blog/${category.id}`
    ))
</script>

<template>
    <router-link :to="url">
        <div class="category">
        <div class="icon-box" :style="{backgroundColor: icon.name === 'directory' ? 'transparent': 'white'}">
            <svg-icon 
                :name="icon.name" 
                :color="icon.color"
            />
        </div>            
        <span class="name">
            {{ category?.name }}
        </span>
    </div>
</router-link>
</template>

<style lang="scss" scoped>
    .category {
        display: flex;
        padding: 10px;
        font-size: 16px;
        font-weight: 500;
        align-items: center;
        color: #333;
        background: #f6f7f8;
        margin-bottom: 2px;
        &:hover {
            opacity: 0.8;
            color: #000;
        }
        .icon-box {
            border-radius: 50%;
            background: #fff;
            padding: -1px;
            width:15px;
            height: 15px;
        }
        .name {
            margin-left: 12px;
            cursor: pointer;
            transition: color 0.3s;
        }
    }
    @media screen and (max-width:900px) { 
        .category {
            padding: 22px 20px;
            font-size: 25px;
            .icon-box {
                margin-top: -2px;
                border-radius: 50%;
                background: #fff;
                width:26px;
                height: 26px;
            }
        }
    }
</style>