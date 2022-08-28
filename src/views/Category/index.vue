<script setup lang="ts">
    import BasicLayout from '@/layout/BasicLayout.vue'
    import Category from './Category.vue'
    import BreadCrumb from '@/components/BreadCrumb.vue';
</script>

<template>
      <basic-layout>
        <template v-slot:nav>
           <bread-crumb />
        </template>
        <template v-slot>
            <category />
        </template>
    </basic-layout>
</template>