<script setup lang="ts">
  import {onBeforeMount, provide, reactive, computed} from 'vue'
  import NavBar from '@/components/NavBar.vue'
  import {getProfile, getSigns} from './services/global'
  
  const globalState: any = reactive({
    profile: {},
    signs: []
  })

  onBeforeMount(async function() {
    globalState.profile = await getProfile()
  })

  onBeforeMount(async function() {
    globalState.signs = await getSigns()
  })

  provide('signs', computed(() => globalState.signs))
  provide('profile', computed(() => globalState.profile))
</script>

<template>
  <loading :visible="!globalState.profile?.name"/>
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>