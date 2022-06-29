<script setup lang="ts">
  import {onBeforeMount, provide, reactive, computed} from 'vue'
  import NavBar from '@/components/NavBar.vue'
  import {getProfile} from './services/global'
  
  const globalState = reactive({
    profile: {}
  })

  onBeforeMount(async function() {
    globalState.profile = await getProfile()
  })

  provide('profile', computed(() => globalState.profile))
</script>

<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>