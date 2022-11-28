<script setup lang="ts">
    import Loading from '@/components/Loading.vue';
    import { defineAsyncComponent } from 'vue';
    import { format } from '@/utils/date';
    const MarkDown = defineAsyncComponent({
        // @ts-ignore
        loader: () => import ('vue3-markdown-it'),
        delay: 0
    });
    const props = defineProps({
        blog: Object
    });
</script>

<template>
    <div class="blog">
        <div class="title">
            <div>{{props?.blog?.title}}</div>
            <div>{{format(props?.blog?.datetime)}}</div>
        </div>
        <div class="content">
            <suspense>
                <template v-slot:default>
                    <mark-down :source="props?.blog?.content"></mark-down>
                </template>
                <template v-slot:fallback>
                    <loading :visible="true"/>
                </template>
            </suspense>
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
            font-weight: 300;
            color: #555;

            h1,h2,h3,h4,h5,p,li {
                font-weight:500;
            }

            h1, h2, h3, h4, h5 {
                color: #333;
            }

            h1 {
                border-bottom: 1px solid rgba(150,160,170, 0.2);
                padding-bottom: 15px;
            }
            h2 {
                border-bottom: 1px solid rgba(150,160,170, 0.2);
                padding-bottom: 10px;
            }
            // h3 {
            //     font-size: 1.2em;
            // }
            // h4 {
            //     font-size: 1.05em;
            // }
            // h5 {
            //     font-size: 0.9em;
            // }
            li {
                line-height: 25px;
            }
            li::marker {
                color: #cd5c5c;
            }
            table {
                width:100%;
                border-left: 1px solid #dfd0d0;
                border-collapse: collapse;
                // table-layout: fixed;
                word-wrap: break-word;
                word-break: break-all;
            }
            th {
                background-color: #dfd0d0;
                padding: 5px;
                min-width: 150px;
            }
            td {
                padding: 5px;
                border-bottom: 1px solid #dfd0d0;
                border-right: 1px solid #dfd0d0 ;
                font-weight: 500;
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
                    color:  #5f9483;
                }
                &-keyword {
                    color: #cd5c5c;
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
                table {
                    width: 100%;
                }
            }
        }
    }
    @media screen and (max-width:900px) { 
        .blog {
            .title {
                font-size: 28px;
                padding: 22px;
                background-color: #f7f8f9;
                border: 1px solid #f7f8f9;
                // border-bottom: 1px solid #d0d7de;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .content {
                border: 1px solid #f7f8f9;
                padding: 20px 20px 80px 20px;
                p {
                    line-height: 40px;
                    font-size: 27px;
                }
                table {
                    font-size: 27px;
                }

                
                th {
                    padding: 15px;
                    min-width: 250px;
                }

                td {
                    padding: 15px;
                }
                h1 {
                    font-size: 40px;
                }

                h2 {
                    font-size: 36px;
                }

                h3 {
                    font-size: 32px;
                }

                h4 {
                    font-size: 30px;
                }

                h5 {
                    font-size: 28px;
                }

                li {
                    font-size: 27px;
                    line-height: 40px;
                }
                code {
                    font-weight: 600;
                    font-size: 25px;
                    line-height: 40px;
                    font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
                }
            }
        }
    }
</style>