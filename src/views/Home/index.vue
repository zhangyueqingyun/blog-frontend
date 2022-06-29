<script setup lang="ts">
    import BasicLayout from '../../layout/BasicLayout.vue'
    import Blogs from './Blogs.vue'
</script>

<template>
    <basic-layout>
        <template v-slot:nav>
            <div class="item active">最新发布</div>
        </template>
        <template v-slot>
            <blogs></blogs>
        </template>
    </basic-layout>
</template>

<style lang="scss">
    .item {
        margin-left: 5px;
        border: 2px solid transparent;
        padding: 0 3px;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
            color: #555;
        }
    }
    .active {
        border-bottom: 2px solid #fd8c73;
    }
</style>