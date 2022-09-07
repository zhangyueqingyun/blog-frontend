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
        <div class="item cate">
            <router-link  to="/">
                首页
            </router-link>
        </div>
        <div class="divide">/</div>
        <template v-for="{id, name} of state.path" :key="id">
                <div class="item cate">
                    
            <router-link :to="`/category/${id}`">
                    {{name}}
            </router-link> 
                </div>
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
            display: flex;
            align-items: center;
            border: 2px solid transparent;
            padding: 0;
            transition: color 0.3s;
            margin: 0;
            cursor: default;
            color: #303132 !important;
        
        }
        .cate {
            color: #404142;
            display: flex;
            align-items: center;
            cursor: pointer;
            &:hover {
                color: #606162;
            }
            a {
                color: #404142;
              
            }
        }
        .divide {
            display: flex;
            align-items: center;
            border: 2px solid transparent;
            padding: 0 5px;
            cursor: default;
            transition: color 0.3s;
            color: #d1d2d3;
            font-weight: 300;
        }
    }
    
    @media screen and (max-width:900px) { 
        .container {

            padding: 10px 0;
            .item {
                display: flex;
                align-items: center;
            }
            .cate {
            
                display: flex;
                align-items: center; 
            }
        }
       
    }
</style>