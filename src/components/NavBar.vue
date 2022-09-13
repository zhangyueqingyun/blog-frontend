<script setup lang="ts">
  import {
    // wechatIconUrl,
     githubUrl
} from '../utils/urls'
</script>

<template>
  <nav class="nav">
    <div class="left-bar">
      <router-link to="/">
        <span class="item go-home">BLOG</span> 
      </router-link>
      <span class="item">@zhangyueqingyun</span>
    </div>
    <div class="right-bar">
      <!-- <div class="item">
        <a :href="githubUrl">
          <svg-icon 
            name="github" 
            color="white" 
            size="22" 
          />
        </a>
      </div> -->
    </div>
  </nav>
</template>

<style scoped lang="scss">

  $nav-bg: #cc9999;
  $nav-color: rgba(255, 255, 255, 0.7);
  $nav-hover-color: rgba(255, 255, 255, .8);
  .nav {
    background:  $nav-bg;
    padding: 30px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left-bar {
      color: $nav-color;
      .item {
          cursor: default;
          transition: color 0.3s;
          font-weight: 300;
          font-size: 20px;
          margin-right: 5px;
          margin-left: 0;
          padding: 0;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
      }

      .go-home {
        cursor: pointer;
        font-size: 20px;
        font-weight: 500;
        color: rgba(255, 250, 250, 0.8);
      }
    }
    .right-bar {
      display: flex;
      align-items: center;
      .item {
        margin-left: 15px;
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width:900px) { 
    .nav {
      
      padding: 40px 25px;
      .left-bar {
        .item {
          font-size: 28px;
          margin-right: 8px;
        }
        .go-home {
          font-size: 32px;
        }
      }
    }
  }
</style>
