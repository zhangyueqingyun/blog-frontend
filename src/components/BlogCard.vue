<script setup lang="ts">
    import {format} from '../utils/date';
    import {inject, computed} from 'vue';
    
    const signs: any = inject('signs');

    const {blog = {}} = defineProps({
        blog: Object
    });

    function click() {
        window.location.href = `/zblog/blog/${blog.id}`
    }

    const sign = computed(() => signs.value.find((sign: any) => sign.id === blog.signId));
</script>

<template>

<div class="header">
    <div class="signs">
        <div class="sign">      
            <div class="circle" :style="{background: sign?.color}"></div>
            <div class="text">{{sign?.name}}</div>
        </div>
    </div>
    <div class="date">发布时间：{{format(blog.datetime)}}</div>
</div>
<div class="card" @click="click">
    <div class="card-header">
        <div class="title">{{blog?.title}}</div>
        <div class="signs">
            <div class="sign">阅读量：{{blog.readingAmount}}</div>
        </div>
    </div>
    <div class="content">
        {{blog?.description}}
    </div>
</div>
</template>

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
    margin-bottom: 15px;
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
.header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3px;
    .signs{
        display: flex;
        .sign {
            display: flex;
            align-items: center;
            .circle {
                background: rgb(241, 224, 90);
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
        margin-bottom: 20px;
        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #fff;
            background: #f4f5f6;
            padding: 20px;
            .title {
                color: #000;
                font-size: 22px;
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
                    padding: 3px 15px;
                    font-size: 16px;
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
            padding: 20px 20px;
            font-size: 22px;
            color-scheme: light;
            flex-grow: 1;
            background: #eff0f1;
        }
    }
    .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2px;
        .signs{
            display: flex;
            .sign {
                display: flex;
                align-items: center;
                .circle {
                    background: rgb(241, 224, 90);
                    width: 20px;
                    height:20px;
                    margin: 5px;
                    border-radius: 50%;
                    margin-left: 5px;
                }
                .text {
                    font-size: 18px;
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
            font-size: 18px;
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