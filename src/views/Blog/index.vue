<script setup lang="ts">
    import BasicLayout from '../../layout/BasicLayout.vue'
    import Blog from './Blog.vue'
</script>

<template>
      <basic-layout>
        <template v-slot:nav>
            <div class="item home">首页</div>
            <div class="divide">/</div>
            <div class="item cate">大前端</div>
            
            <div class="divide">/</div>
            <div class="item cate">基础</div>
            
            <div class="divide">/</div>
            <div class="item cate">浏览器</div>
            
            <div class="divide">/</div>
            <div class="item cate">原理</div>
            
            <div class="divide">/</div>
            <div class="item article">几句话说清浏览器渲染过程.md</div>
        </template>
        <template v-slot>
            <blog></blog>
        </template>
    </basic-layout>
</template>

<style lang="scss" scoped>
    .item {
        border: 2px solid transparent;
        padding: 0;
        transition: color 0.3s;
        margin: 0;
        cursor: default;
        color: #333;
    
        &:hover {
            color: #555;
        }
    }
    .home {
        color: #666;
        cursor: pointer;
    }
    .cate {
        color: #666;
        cursor: pointer;
    }
    .divide {
        border: 2px solid transparent;
        padding: 0 5px;
        cursor: default;
        transition: color 0.3s;
        color: #777;
    }
</style>