<script setup lang="ts">
    import { onBeforeMount, ref, watch, computed } from 'vue';
    import { useRoute } from 'vue-router'
    import { getPathById } from '@/services/path';

    const frontPaths = ref(undefined);
    const endPath = ref({
        name: ''
    });
    
    const route: any = useRoute();
    const isCategory = computed(() => route.name === 'category');
    
    async function setPath(){
        const currentName = route.name;
        
        if(!/(category|blog)/.test(currentName)) {
            stop();
            return;
        }

        const currentPath = await getPathById(currentName, route.params.id);
        const { length } = currentPath;
        
        endPath.value = currentPath[length - 1];
        frontPaths.value = currentPath.slice(0, length - 1);
    }

    onBeforeMount(setPath);

    const stop = watch(() => route.params, setPath);
    
    watch(() => route.name, stop);

    defineExpose({
        frontPaths,
        endPath,
        isCategory
    })
</script>

<template>
    <div class="container" v-if="frontPaths">
        <div class="item cate">
            <router-link  to="/">
                首页
            </router-link>
        </div>
        <div class="divide">/</div>
        <template v-for="{id, name} of frontPaths" :key="id">
            <div class="item cate">      
                <router-link :to="`/category/${id}`">
                    {{name}}
                </router-link> 
            </div>
            <div class="divide">
                /
            </div>
        </template>
        <div class="item">
            {{endPath.name}}
        </div>
        <div v-if="isCategory" class="divide">
            /
        </div>
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
            color: #9a9b9c;
            font-weight: 300;
        }
    }
    
    @media screen and (max-width:900px) { 
        .container {
            font-size: 26px;
            .item {
                padding: 24px 3px;
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