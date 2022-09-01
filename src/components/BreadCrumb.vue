<script setup lang="ts">
    import { useRoute } from 'vue-router'
    import { getPathById } from '@/services/path';
    import { onBeforeMount, reactive, watch } from 'vue';
    
    const route: any = useRoute();

    const state: any = reactive({
        path: undefined,
        current: {}
    });
    
    async function fetchPath(){
        if(route.name !== 'category' && route.name !== 'blog') {
            stop();
            return;
        }
        const path = await getPathById(route.name, route.params.id);
        const {length} = path;
        
        state.current = path[length - 1];
        state.path = path.slice(0, length - 1);
    }

    onBeforeMount(fetchPath);
    const stop = watch(() => route.params, fetchPath);
    watch(() => route.name, stop);
</script>

<template>
    <div class="container" v-if="state.path">
        <router-link  to="/">
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
        <div v-if="route.name == 'category'" class="divide">/</div>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        display: flex;
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
    }

</style>