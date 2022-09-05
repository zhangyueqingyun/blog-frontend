<script setup lang="ts">
    import {reactive, onBeforeMount} from 'vue'
    import {useRoute} from 'vue-router'
    // @ts-ignore
    import MarkDown from 'vue3-markdown-it';
    import Loading from '@/components/Loading.vue';
    import { getBlogById } from '@/services/blog'
    import { format } from '@/utils/date';

    const route = useRoute()

    const state: any = reactive({
        blog: undefined
    })

    onBeforeMount(async function() {
        state.blog = await getBlogById(route.params.id)
    })

</script>

<template>
    <loading :visible="!state.blog" />
    <div v-if="state.blog" class="blog">
        <div class="title">
            <div>{{state.blog.title}}</div>
            <div>{{format(state.blog.datetime)}}</div>
        </div>
        <div class="content">
            <mark-down :source="state.blog.content"></mark-down>
        </div>
    </div>
</template>

<style lang="scss">
    .blog {
        border-radius: 6px;
        margin-top: 30px;
        .title {
            padding: 16px;
            background-color: #f7f8f9;
            border: 1px solid #f7f8f9;
            // border-bottom: 1px solid #d0d7de;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .content {
            padding: 30px 32px 80px 32px;
            border: 1px solid #f7f8f9;
            background: linear-gradient(to bottom, white, #f7f8f9);

            
            h1,h2,h3,h4,h5,p,li {
                font-weight:500;
            }

            h1, h2, h3, h4, h5 {
                color: #dd7979;
            }


            h1 {
                border-bottom: 1px solid rgba(220,150,150, 0.3);
                padding-bottom: 15px;
            }

            h2 {
                border-bottom: 1px solid rgba(220,150,150, 0.3);
                padding-bottom: 10px;
            }
            li {
                line-height: 25px;
            }

            li::marker {
                color: #dd7979;
            }

            pre {
                border-radius: 6px;
                // background:rgba(254,250,251);
                background: #fafbfc;
                border: 1px solid #fafbfc;
                padding: 20px;
                font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
                overflow-x: auto;
            }

            code {
                color: #555;
                font-weight: 600;
                font-size: 15px;
                line-height: 20px;
                font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
            }
            .function_ {
                color: #cd5c5c;
            }
            .class_ {
                color: #b22222;
            }
            .hljs {
                &-params {
                    color: #555;
                }
                &-comment {
                    color:  #cd5c5c;
                    font-size: 15px;
                }
                &-keyword {
                    color: #cd5c5c;
                    font-size: 15px;
                }
                &-literal {
                    color: #a3a4a5;
                }
                &-built_in {
                    color: #8b0000;
                }
                &-property {
                    color: #cd5c5c;
                }
            }
        }
    }
</style>