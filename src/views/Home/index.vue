<script setup lang="ts">
    import BasicLayout from '@/layout/BasicLayout.vue';
    import News from './News.vue';
    import Categories from './Categories.vue';
    import Loading from '@/components/Loading.vue';
    import ProfileMobile from '@/components/ProfileMobile.vue'
    import { getNews, getNav } from '@/services/home';
    import { reactive, onBeforeMount } from 'vue';

    const data: any = reactive({
        active: 'news',
        navs: undefined,
        categoriedBlogs: undefined
    });

    function handleTabClick (tab: any) {
        data.active = tab;
    }

    onBeforeMount(async function() {
        data.categoriedBlogs = await getNews();
    });

    onBeforeMount(async function () {
        data.navs = await getNav();
    })
</script>

<template>
    <loading :visible="!data.categoriedBlogs || !data.navs"/>
    <profile-mobile></profile-mobile>
    <basic-layout>
        <template v-slot:nav>
            <div 
                v-show="data.navs"
                class="item"
                :class="{active: data.active == 'news'}"
                @click="handleTabClick('news')"
            >最新发布</div>
            <div v-for="nav of data.navs"
                class="item"
                :class="{active: data.active == nav}"
                @click="handleTabClick(nav)"
            >{{ nav.name }}</div>
        </template>
        <template v-slot>
            <keep-alive>
                <news :categoriedBlogs="data.categoriedBlogs" v-if="data.active == 'news'" />
                <categories v-else :nav="data.active" :key="`${data?.active?.id}`" />
            </keep-alive>
        </template>
    </basic-layout>
</template>

<style lang="scss" scoped>
    .item {
        margin-right: 10px;
        border: 3px solid transparent;
        padding: 0 2px;
        cursor: pointer;
        color: #303132;
        font-weight: 300;
        transition: color 0.3s;
        white-space: nowrap;

        &:hover {
            color: #000;
        }
    }
    .active {
        border-bottom: 3px solid #eebbbb;
        border-radius: 3px;
        color: #2a3b2c;
        font-weight: 500;
    }
    
    @media screen and (max-width:900px) { 
       .item {
            display: flex;
            font-size: 22px;
            align-items: center;
            padding: 15px 3px;
            font-weight: 300;
       }
       .active {
            font-weight: 500;
       }
    }
</style>