<script setup lang="ts">    
    import { inject } from 'vue';

    const profile: any = inject('profile');
</script>

<template>
    <div class="profile">
        <div class="info">
            <div class="avatar">
                <img v-show="profile?.avatar" class="avatar" :src="profile?.avatar" >
            </div>
            <div>
                <div class="name">{{profile?.name}}</div>
                <div class="pick-name">{{profile?.mail}}</div>
            </div>
        </div>
        <div class="feeling">
            <div class="en">{{profile?.feeling?.en}}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .profile {
        display: none;
    }

    @media screen and (max-width:900px) { 
       .profile {
            background: #ffeeee;
            display: block;
            padding: 0 35px;
            .info {
                display: flex;
                padding: 22px 0;
                align-items: center;
                border-bottom: 2px solid white;
                .avatar {
                    border-radius: 50%;
                    margin-right: 12px;
                    img {
                        width: 80px;
                        height: 80px;
                    }
                }

                .name {
                    font-size: 28px;
                    font-weight: 500;
                }

                .pick-name {
                    font-size: 25px;
                    font-weight: 300;
                }
            }
            .feeling {
                padding: 15px 0;
                font-size: 24px;
                color: #dd9999;
                font-weight: 500;
            }
        }
    }
</style>