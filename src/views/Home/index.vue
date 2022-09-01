<script setup lang="ts">
    import BasicLayout from '../../layout/BasicLayout.vue';
    import News from './News.vue';
    import Categories from './Categories.vue';
    import { getNav } from '../../services/home';

    import { reactive, onBeforeMount } from 'vue';

    const data: any = reactive({
        active: 'news',
        navs: undefined
    });

    function handleTabClick (tab: any) {
        data.active = tab;
    }

    onBeforeMount(async function () {
        data.navs = await getNav();
    })
</script>

<template>
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
                <news v-if="data.active == 'news'" />
                <categories v-else :nav="data.active" :key="`${data?.active?.id}`" />
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