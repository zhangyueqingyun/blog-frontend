<template>
    <div v-if="data.show" class="loading" :style="{opacity: data.opacity}">
        <div class="loading-box">
            <div class="circle"></div>
            我要喝酒。灌醉我刚才吃下的饭。
        </div>
    </div>
</template>

<script setup lang="ts">
    import { reactive, nextTick, watch } from 'vue';

    const props = defineProps({
        visible: Boolean
    });

    const data = reactive({
        opacity: 1,
        show: true,
    });

    function closeLoading () {
        data.opacity = 0;
        nextTick(function() {
            setTimeout(function() {
                data.show = false;
            }, 300);
        });
    }

    watch(() => props.visible, closeLoading);
</script>

<style scoped lang="scss">
.loading {
    position: fixed;
    left: 0;
    top:0;
    z-index: 2022;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255,244,244,1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    transition: opacity 0.3s;

    &-box {
        display: flex;
        align-items: center;
        margin-top: -10vh;
        background-color: rgba(255, 250, 250);
        padding: 10px;
        border-radius: 50px;
        border: 1px solid #cc9999;
        color: #cc9999;
        .circle {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 3px solid #fff;
            border-left: 5px solid #cc9999;
            border-right: 4px solid #9999cc;
            border-top: 3px solid #cc9999;
            border-bottom: 3px solid #9999cc;
            animation: load 1s linear infinite;
            margin-right: 10px;
        }
    }
}
 
@keyframes load {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>