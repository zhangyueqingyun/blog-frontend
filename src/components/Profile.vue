<script setup lang="ts">
    import {inject} from 'vue'
    const profile: any = inject('profile')
</script>

<template>
    <div v-if="profile.name" class="content">
        <div>
            <img v-show="profile?.avatar" class="avatar" :src="profile?.avatar" >
        </div>
        <div class="name">{{profile?.name}}</div>
        <div class="pick-name">{{profile?.mail}}</div>
        <div class="feeling">
            <!-- <div class="ch">{{profile?.feeling?.ch}}</div> -->
            <div class="en">{{profile?.feeling?.en}}</div>
        </div>
    </div>
</template>


<style scoped lang="scss">
    .content {
        position: sticky;
        top: 20px;
        margin-top: -32px;
        .avatar {
            width: 296px;
            height: 296px;
            border-radius: 50%;
        }
        .name {
            font-size: 26px;
            font-weight: 300;
        }

        .pick-name {
            color: #57606a;
            font-size: 20px;
            font-weight: 300;
        }

        .feeling {
            margin-top: 22px;
            .en {
                color: #333;
                font-size: 15px;
                font-weight: 500;
                background: #f8f9fa;
                padding: 10px;
                border-radius: 4px;
                margin-top: 10px;
                word-break: break-all;
            }
        }
    }
</style>