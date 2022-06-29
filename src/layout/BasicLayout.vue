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
        border: 1px solid rgb(216, 222, 228);
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

            .item {
                margin-left: 5px;
                border: 2px solid transparent;
                padding: 0 3px;
                cursor: pointer;
                transition: color 0.3s;

                &:hover {
                    color: #555;
                }
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
        }

        .blogs {
            @extend .right-panel;
        }
    }

</style>