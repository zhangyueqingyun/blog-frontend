<script setup lang="ts">
import {reactive, onBeforeMount} from 'vue'
// @ts-ignore
import MarkDown from 'vue3-markdown-it';
import {getBlogById} from '../../services/blog'

const state:any = reactive({
    blog: {}
})

    onBeforeMount(async function() {
        state.blog = await getBlogById(0)
    })
</script>

<template>
    <div class="blog">
        <div class="title">
            <div>{{state.blog.title}}.md</div>
            <div>{{state.blog.date}}</div>
        </div>
        <div class="content">
            <mark-down :source="state.blog.md"></mark-down>
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