<script setup lang="ts">
    import BasicLayout from '../../layout/BasicLayout.vue'
    import Blogs from './Blogs.vue'
</script>

<template>
    <basic-layout>
        <template v-slot:nav>
            <div class="item active">最新发布</div>
            <div class="item">大前端</div>
            <div class="item">计算机</div>
            <div class="item">系统设计</div>
            <div class="item">项目管理</div>
            <div class="item">学习日记</div>
        </template>
        <template v-slot>
            <blogs></blogs>
        </template>
    </basic-layout>
</template>

<style lang="scss" scoped>
    .item {
        margin-right: 10px;
        border: 2px solid transparent;
        padding: 0 3px;
        cursor: pointer;
        color: #555;
        transition: color 0.3s;

        &:hover {
            color: #000;
        }
    }

    .active {
        border-bottom: 2px solid #fd8c73;
        color: #000;
    }
</style>