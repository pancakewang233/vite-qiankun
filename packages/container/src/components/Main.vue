<script setup lang="ts">
import NavBar from 'src/components/NavBar.vue'
import SideBar from 'src/components/SideBar.vue'
</script>

<template>
  <div class="h-screen flex flex-col">
    <NavBar />
    <div class="flex-grow flex">
      <SideBar />
      <div class="flex-grow">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>