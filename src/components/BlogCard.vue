<script setup lang="ts">
    import {format} from '../utils/date';
    
    const {blog = {}} = defineProps({
        blog: Object
    });
</script>

<template>
    
    <router-link :to="`/blog/${blog.id}`">
    <div class="card">
        <div class="header">
            <div class="title">{{blog?.title}}</div>
            <!-- <div class="sign">标签</div> -->
        </div>
        <div class="content">
            {{blog?.description}}
        </div>
        <!-- <div class="footer"> -->
            <!-- <div class="sign" v-for="sign of blog?.signs" :key="sign.id">
                <div class="circle" :style="{background: sign?.icon}"></div>
                <div class="text">{{sign?.name}}</div>
            </div> -->
            <!-- <div class="date">{{format(blog?.datetime)}}</div> -->
        <!-- </div> -->
    </div>
</router-link>
</template>

<style scoped lang="scss">
    .card {
        &:hover {
            opacity: 0.8;
        }
        transition: opacity 0.3s;
        background: #efefef;
        cursor: pointer;
        border-radius: 6px;
        box-sizing:border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 15px;
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #fff;
            padding: 12px;
            .title {
                color: black;
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
                transition: color 0.3s;
                text-decoration: none;
            }
            .sign {
                padding: 0 7px;
                font-size: 12px;
                font-weight: 500;
                line-height: 18px;
                white-space: no-wrap;
                border: 1px solid #d0d7de;
                border-radius: 2em;
            }
        }
        .content {
            color: black;
            padding: 17px 13px;
            font-size: 12px;
            color-scheme: light;
            flex-grow: 1;
        }

        .footer {
            display: flex;
            justify-content: space-between;
            .sign {
                display: flex;
                align-items: center;
                .circle {
                    background: rgb(241, 224, 90);
                    width: 10px;
                    height:10px;
                    border-radius: 50%;
                    border: 1px solid rgba(27, 31, 36, 0.1);
                }
                .text {
                    font-size: 12px;
                    color: rgb(87, 96, 106);
                    line-height: 18px;
                    margin-left: 3px;
                }
            }
            .date {
                font-size: 12px;
                color: rgb(87, 96, 106);
                line-height: 18px;
                margin-left: 3px;
            }
        }
    }
</style>