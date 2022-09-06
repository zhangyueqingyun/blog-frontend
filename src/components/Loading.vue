<template>
    <div v-show="data.show" class="container" :style="{opacity: data.opacity}">
        <div class="loading">
            <div class="circle"></div>
            加载中 ...
        </div>
    </div>
</template>

<script setup lang="ts">
    import { reactive, nextTick, watch } from 'vue';

    const props = defineProps({
        visible: Boolean,
        delay: Number
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

    watch(() => props.visible, function() {
        if(props.delay)
            setTimeout(closeLoading, props.delay);
        else
            closeLoading();
    });
</script>

<style scoped lang="scss">
.container {
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
    .loading {
        display: flex;
        align-items: center;
        margin-top: -15vh;
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