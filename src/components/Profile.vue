<script setup lang="ts">
    import {inject} from 'vue'
    const profile: any = inject('profile')
</script>

<template>
    <div class="content">
        <div>
            <img class="avatar" :src="profile?.avatar" >
        </div>
        <div class="name">{{profile?.name}}</div>
        <div class="pick-name">{{profile?.mail}}</div>
        <div class="feeling">
            <div class="ch">{{profile?.feeling?.ch}}</div>
            <div class="en">{{profile?.feeling?.en}}</div>
        </div>
    </div>
</template>


<style scoped lang="scss">
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
            .en {
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
</style>