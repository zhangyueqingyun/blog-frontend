<script setup lang="ts">
    import BasicLayout from '../../layout/BasicLayout.vue'
    import Blog from './Blog.vue'
</script>

<template>
      <basic-layout>
        <template v-slot:nav>
            <div class="item active">技术</div>
        </template>
        <template v-slot>
            <blog></blog>
        </template>
    </basic-layout>
</template>

<style lang="scss">
    .item {
        margin-left: 5px;
        border: 2px solid transparent;
        padding: 0 7px;
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