<script setup lang="ts">
    import {
        onBeforeMount,
        reactive
    } from 'vue'

    import Profile from './Profile.vue'
    import Blogs from './Blogs.vue'

    import {getProfile, getCategoriedBlogs} from '../../services/home'

    const state = reactive({
        profile: {},
        categoriedBlogs: []
    })

    onBeforeMount(async function() {
        state.profile = await getProfile()
    })

    onBeforeMount(async function() {
        state.categoriedBlogs = await getCategoriedBlogs()
    })
    console.log(state)
</script>

<template>
    <div class="top">
        <div class="block"></div>
        <div class="tabs">
            <div class="item active">最新发布</div>
        </div>
    </div>
    <div class="bottom">
        <div class="profile">
            <profile :profile="state.profile"></profile>
        </div>
        <div class="blogs">
           <blogs :categoriedBlogs="state.categoriedBlogs"></blogs>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .left-panel {
         width: 296px;
    }
    .right-panel {
        min-width: 300px;
        max-width: 1000px;
        flex: 1 0;
        margin-left: 30px;
    }
    .top {
        border: 1px solid rgb(216, 222, 228);
        display: flex;
        justify-content: center;
        padding: 0 50px;
        padding-top: 24px;
        .block {
            @extend .left-panel;
        }
        .tabs {
            @extend .right-panel;
            height : 48px;
            line-height: 48px;
            display: flex;

            .item {
                margin-left: 5px;
                border: 2px solid transparent;
                padding: 0 3px;
            }
            .active {
                border-bottom: 2px solid #fd8c73;
            }

        }
    }

    .bottom {
        display: flex;
        justify-content: center;
        padding: 0 50px;
        .profile {
            @extend .left-panel;
            background-color: white;
        }

        .blogs {
            @extend .right-panel;
        }
    }

</style>