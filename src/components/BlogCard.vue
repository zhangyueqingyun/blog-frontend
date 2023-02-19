<template>
    <div class="card" @click="jumpToBlog">
        <div class="card-header">
            <div class="title">
                {{blog?.title}}
            </div>
            <div class="signs">
                <div class="sign">
                    阅读量：{{blog.readingAmount}}
                </div>
            </div>
        </div>
        <div class="content">
            {{blog?.description}}
        </div>
    </div>
    <div class="footer">
        <div class="signs">
            <!-- <div class="sign" v-show="hasSign">      
                <div class="circle" :style="signStyle"></div>
                <div class="text">
                    {{sign?.name || '未分类'}}
                </div>
            </div> -->
        </div>
        <div class="date">发布时间：{{format(blog.datetime)}}</div>
    </div>
</template>

<script setup lang="ts">
    // import type { Ref, ComputedRef } from 'vue';
    // import { inject, computed } from 'vue';
    import { format } from '../utils/date';

    const { blog = {} } = defineProps({
        blog: Object
    });

    // interface Sign {
    //     signId?: String,
    //     name?: String,
    //     color?: String | Number | undefined
    // }

    // const signs: Sign[] | undefined = inject('signs');

    function jumpToBlog() {
        window.location.href = `/zblog/blog/${blog.id}`
    }

    // function findSign() {
    //     return signs?.find(({id}: any) => (id === blog.signId));
    // }

    // const sign: ComputedRef<Sign | undefined>   = computed(findSign);
    // const hasSign: ComputedRef<Boolean>         = computed(() => (!!sign?.value?.name));
    // const signStyle: any = computed(() => ({
    //     background: sign?.value?.color || 'transparent'
    // }))

    defineExpose({
        blog,
        // sign,
        // hasSign,
        // signStyle,
        jumpToBlog
    });
</script>

<style scoped lang="scss">
.card {
    &:hover {
        opacity: 0.8;
    }
    transition: opacity 0.3s;
    cursor: pointer;
    border-radius: 8px;
    box-sizing:border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    margin-bottom: 3px;
    &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #fff;
        background: #f4f5f6;
        padding: 12px;
        .title {
            color: #000;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            transition: color 0.3s;
            text-decoration: none;
            border-left: 3px solid #cc9999;
            padding-left: 10px;
            font-weight: 500;
        }
        .signs {
            display: flex;
            .sign {
                margin-left: 5px;
                padding: 0 7px;
                font-size: 12px;
                font-weight: 500;
                line-height: 18px;
                white-space: no-wrap;
                border: 1px solid #fff;
                background-color: white;
                border-radius: 2em;
            }
        }
    }
    .content {
        color: black;
        padding: 17px 13px;
        font-size: 15px;
        color-scheme: light;
        flex-grow: 1;
        background: #eff0f1;
    }
}
.footer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    .signs{
        display: flex;
        .sign {
            display: flex;
            align-items: center;
            .circle {
                background: rgb(224, 224, 224);
                width: 10px;
                height:10px;
                margin: 2px;
                border-radius: 50%;
                margin-left: 7px;
            }
            .text {
                font-size: 13px;
                color: rgb(87, 96, 106);
                line-height: 18px;
                margin-left: 3px;
                margin-right: 5px;
            }
        }
    }
    .date {
        font-size: 12px;
        color: #999;
        line-height: 18px;
        margin-left: 3px;
        margin-left: 5px;
        padding: 0 7px;
        font-size: 10px;
        font-weight: 500;
        line-height: 18px;
        white-space: no-wrap;
        // border: 1px solid #919293;
        // background-color: #ffcccc;
        border-radius: 2em;
        margin-top: 2px;
    }
}
    
@media screen and (max-width:900px) { 
    .card {        
        border-radius: 8px;
        margin-bottom: 4px;
        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #fff;
            background: #f4f5f6;
            padding: 20px;
            .title {
                color: #000;
                font-size: 28px;
                font-weight: 500;
                cursor: pointer;
                transition: color 0.3s;
                text-decoration: none;
                border-left: 3px solid #cc9999;
                padding-left: 15px;
                font-weight: 500;
            }
            .signs {
                display: flex;
                .sign {
                    margin-left: 5px;
                    padding: 10px 15px;
                    font-size: 20px;
                    font-weight: 500;
                    white-space: no-wrap;
                    border: 1px solid #fff;
                    background-color: white;
                    border-radius: 2em;
                }
            }
        }
        .content {
            color: black;
            padding: 24px 20px;
            font-size: 24px;
            color-scheme: light;
            flex-grow: 1;
            background: #eff0f1;
        }
    }
    .footer {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        .signs{
            display: flex;
            .sign {
                display: flex;
                align-items: center;
                .circle {
                    width: 18px;
                    height:18px;
                    margin: 5px;
                    border-radius: 50%;
                    margin-left: 5px;
                }
                .text {
                    font-size: 22px;
                    color: rgb(87, 96, 106);
                    line-height: 18px;
                    margin-left: 3px;
                    margin-right: 5px;
                }
            }
        }
        .date {
            color: #999;
            margin-left: 5px;
            padding: 0 7px;
            font-size: 22px;
            font-weight: 500;
            line-height: 18px;
            white-space: no-wrap;
            // border: 1px solid #919293;
            // background-color: #ffcccc;
            border-radius: 2em;
            margin-top:5px;
        }
    }
}
</style>