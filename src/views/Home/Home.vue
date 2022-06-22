<script setup lang="ts">
    import {avatarUrl} from '../../utils/urls'
    import Module from './Module.vue'
    import BlogCard from './BlogCard.vue'
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
            <div class="content">
                <div><img class="avatar" :src="avatarUrl" ></div>
                 <div class="name">张玥卿云</div>
                 <div class="pick-name">zhangyueqingyun@foxmail.com</div>
                 <div class="feeling">
                    <div class="ch">追梦,成为世界一流的程序员</div>
                    <div class="eng">Chasing my dream. To be the best programmer all over the world.</div>
                 </div>
            </div>
        </div>
        <div class="blogs">
            <module>
                <template v-slot:left>技术</template>
                <template v-slot:default>
                    <blog-card
                        date="2022-06-21 10:24:00"
                        title="几句话说清浏览器渲染过程"
                        desc="Webkit 是 Safari 浏览器的内核（渲染引擎），由苹果公司开发，负责将网页数据渲染为图像。 "
                    ></blog-card>
                </template>
            </module>
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
        padding-top: 24px;
        border: 1px solid rgb(216, 222, 228);
        display: flex;
        justify-content: center;
        padding: 0 50px;
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
            .content {
                margin-top: -32px;
                .avatar {
                    width: 296px;
                    height: 296px;
                    border-radius: 50%;
                    border: 1px solid #d0d7de;
                    background: white;
                }
                .name {
                    font-size: 24px;
                }

                .pick-name {
                    color: #57606a;
                    font-size: 18px;
                    font-weight: 300;
                }

                .feeling {
                    margin-top: 24px;
                    .eng {
                        color: #57606a;
                        font-size: 14px;
                        font-weight: 300;
                        background: #f6f8fa;
                        border: 1px solid rgba(27,31,36,0.15);
                        padding: 10px;
                        border-radius: 4px;
                        margin-top: 10px;
                        word-break: break-all;
                    }
                }
            }
        }

        .blogs {
            @extend .right-panel;
        }
    }

</style>