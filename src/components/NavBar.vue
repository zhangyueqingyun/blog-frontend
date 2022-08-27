<script setup lang="ts">
  import GitHubIcon from '@/components/icons/GitHubIcon.vue'
  import {
    // wechatIconUrl,
     githubUrl
} from '../utils/urls'
</script>

<template>
  <nav class="nav">
    <div class="left-bar">
      <router-link to="/">
        <span class="item go-home">zblog</span> 
      </router-link>
      <span class="item">@zhangyueqingyun</span>
    </div>
    <div class="right-bar">
      <div class="item">
        <a :href="githubUrl"><git-hub-icon></git-hub-icon></a>
      </div>
      <!-- <div class="item">
        <img class="icon" :src="wechatIconUrl" >
      </div> -->
    </div>
  </nav>
</template>

<style scoped lang="scss">

  $nav-bg: #24292f;
  $nav-color: rgba(255, 255, 255, 0.7);
  $nav-hover-color: rgba(255, 255, 255, .8);
  .nav {
    background:  $nav-bg;
    padding: 16px 24px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left-bar {
      color: $nav-color;
      .item {
          cursor: default;
          transition: color 0.3s;
          font-weight: 500;
          font-size: 16px;
          margin-right: 3px;
          margin-left: 0;
          padding: 0;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
      }

      .go-home {
        cursor: pointer;
        color: rgba(255, 255, 255, 0.8);
      }
    }
    .right-bar {
      display: flex;
      align-items: center;
      .item {
        margin-left: 15px;
        cursor: pointer;
        .icon {
          height: 22px;
          width: 22px;
        }
      }
    }
  }
</style>
