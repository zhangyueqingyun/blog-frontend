<script setup lang="ts">
    import BasicLayout from '../../layout/BasicLayout.vue'
</script>
<template>
      <basic-layout>
        <template v-slot:nav>
            插槽A
        </template>
        <template v-slot>
            插槽B
        </template>
    </basic-layout>
</template>