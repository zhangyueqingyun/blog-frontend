<script setup lang="ts">
    import {reactive, onBeforeMount} from 'vue'
    import {useRoute} from 'vue-router'
    // @ts-ignore
    import MarkDown from 'vue3-markdown-it';
    import {getBlogById} from '@/services/blog'
    import {format} from '@/utils/date'

    const route = useRoute()

    const state: any = reactive({
        blog: {}
    })

    onBeforeMount(async function() {
        state.blog = await getBlogById(route.params.id)
    })

</script>

<template>
    <div class="blog">
        <div class="title">
            <div>{{state.blog.title}}.md</div>
            <div>{{format(state.blog.datetime)}}</div>
        </div>
        <div class="content">
            <mark-down :source="state.blog.content"></mark-down>
        </div>
    </div>
</template>

<style lang="scss">
    .blog {
        border: 1px solid #d0d7de;
        border-radius: 6px;
        margin-top: 30px;
        .title {
            padding: 16px;
            background-color: #f6f8fa;
            border-bottom: 1px solid #d0d7de;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .content {
            padding: 16px 32px 32px;
        }
    }
</style>