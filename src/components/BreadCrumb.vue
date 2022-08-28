<script setup lang="ts">
    import { useRoute } from 'vue-router'
    import { getPathById } from '@/services/path';
    import { onBeforeMount, reactive } from 'vue';
    
    const route = useRoute();
    
    const state: any = reactive({
        path: [],
        current: {}
    });
    
    async function fetchPath(){
        const {path, current} = await getPathById(route.params.id);
        state.path = path;
        state.current = current;
    }

    onBeforeMount(fetchPath);
</script>

<template>
    <router-link to="/">
        <div class="item home">首页</div>
    </router-link>
    <div class="divide">/</div>
    <template v-for="{id, name} of state.path" :key="id">
        <router-link :to="`/category/${id}`">
            <div class="item cate">{{name}}</div>
        </router-link> 
        <div class="divide">/</div>
    </template>
    <div class="item">{{state.current.name}}</div>
    <div v-if="state.current.type === 'category'" class="divide">/</div>
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