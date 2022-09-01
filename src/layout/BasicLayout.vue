<script setup lang="ts">
import Profile from '../components/Profile.vue'
</script>

<template>
    <div class="top">
        <div class="block"></div>
        <div class="tabs">
            <slot name="nav"></slot>
        </div>
    </div>
    <div class="bottom">
        <div class="profile">
            <profile></profile>
        </div>
        <div class="blogs">            
            <slot></slot>
        </div>
    </div>
    <div class="footer">
        @copy-right： 张玥卿云
    </div>
</template>

<style scoped lang="scss">
    .left-panel {
        width: 296px; 
        min-width: 296px;
    }
    .right-panel {
        min-width: 600px;
        max-width: 1000px;
        flex: 1 0;
        margin-left: 30px;
    }
    .top {
        background-color: rgba(250,242,242);
        position: sticky;
        top: -30px;
        display: flex;
        justify-content: center;
        padding: 0 50px;
        padding-top: 24px;
        .block {
            @extend .left-panel;
        }
        .tabs {
            @extend .right-panel;
            height : 48px;
            line-height: 48px;
            display: flex;
            min-width: 600px;
        }
    }
    .bottom {
        display: flex;
        justify-content: center;
        padding: 0 50px;
        padding-bottom: 70px;
        background: white;
        min-height: 70vh;
        .profile {
            @extend .left-panel;
            background-color: white;
        }
        .blogs {
            @extend .right-panel;
        }
    }
    .footer {
        position: fixed;
        bottom: 0;
        width: 100vw;
        display: flex;
        justify-content: center;
        border-top: 1px solid #eee;
        padding: 8px;
        font-size: 13px;
        color: #999;
        font-weight: 300;
        background: #fafafa;
    }

</style>