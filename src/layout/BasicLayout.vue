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
        @Copyright： 张玥卿云
    </div>
</template>

<style scoped lang="scss">
    .left-panel {
        width: 296px; 
        min-width: 296px;
    }
    .right-panel {
        min-width: 600px;
        max-width: 900px;
        flex: 1 0;
        margin-left: 30px;
    }

    .top {
        background-color: rgba(254,247,248);
        position: sticky;
        top: -10px;
        display: flex;
        justify-content: center;
        padding: 0 50px;
        padding-top: 10px;
        .block {
            @extend .left-panel;
        }
        .tabs {
            @extend .right-panel;
            height : 48px;
            line-height: 48px;
            display: flex;
            min-width: 600px;
            overflow-x: auto;
            overflow-y: hidden;
        }
    }
    .bottom {
        display: flex;
        justify-content: center;
        padding: 0 50px;
        padding-bottom: 70px;
        .profile {
            @extend .left-panel;
            
        }
        .blogs {
            @extend .right-panel;
        }
        @media screen and (max-width:900px) { 
            .left-panel {
                display: none;
            }
            .right-panel {
                min-width: 0;
                max-width: 100vw;
                margin-left: 0;
            }
        }

    }
    
    @media screen and (max-width:900px) { 
        .block {
            display: none;
        }
        .top {
            justify-content: flex-start;
            padding: 0 35px;
            top: 0;
            
            font-size: 25px;
            .tabs {
                margin-left: 0;
                height: 60px;
            }
        }
        .bottom {
            padding: 0 35px;
            padding-bottom: 70px;
        }
    }
    .footer {
        position: fixed;
        bottom: 0;
        width: 100vw;
        display: flex;
        justify-content: center;
        border-top: 1px solid #e0e1e2;
        padding: 8px;
        font-size: 13px;
        color: #999;
        font-weight: 300;
        background: #fafbfc;
    }

    @media screen and (max-width:900px) { 
        .footer {
            padding: 15px;
            font-size: 22px;
        }
    }
</style>