<script setup lang="ts">
    import BasicLayout from '../../layout/BasicLayout.vue';
    import Blogs from './Blogs.vue';
    import Cate from '../Cate/index.vue';
    import { getNav } from '../../services/home';

    import { reactive, onBeforeMount } from 'vue';

    const data: any = reactive({
        active: 'news',
        navs: []
    });

    function handleTabClick (name: string) {
        data.active = name;
    }

    onBeforeMount(async function () {
        data.navs = await getNav();
    })
</script>

<template>
    <basic-layout>
        <template v-slot:nav>
            <div 
                class="item"
                :class="{active: data.active == 'news'}"
                @click="handleTabClick('news')"
            >最新发布</div>
            <div v-for="nav of data.navs"
                class="item"
                :class="{active: data.active == nav.id}"
                @click="handleTabClick(nav.id)"
            >{{ nav.name }}</div>
        </template>
        <template v-slot>
            <keep-alive>
                <blogs v-if="data.active == 'news'" />
                <cate v-else />
            </keep-alive>
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