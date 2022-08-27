<script setup lang="ts">
    import BasicLayout from '../../layout/BasicLayout.vue'
    import Blog from './Blog.vue'
</script>

<template>
      <basic-layout>
        <template v-slot:nav>
            <div class="item">首页</div>
            <div class="divide">/</div>
            <div class="item">大前端</div>
            
            <div class="divide">/</div>
            <div class="item">基础</div>
            
            <div class="divide">/</div>
            <div class="item">浏览器</div>
            
            <div class="divide">/</div>
            <div class="item">原理</div>
            
            <div class="divide">/</div>
            <div class="item">几句话说清浏览器渲染过程.md</div>
        </template>
        <template v-slot>
            <blog></blog>
        </template>
    </basic-layout>
</template>

<style lang="scss">
    .item {
        border: 2px solid transparent;
        padding: 0;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
            color: #555;
        }
    }
    .divide {
        border: 2px solid transparent;
        padding: 0 5px;
        cursor: default;
        transition: color 0.3s;
        color: #777;
    }
</style>