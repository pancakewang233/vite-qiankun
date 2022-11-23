<script setup lang="ts">
import NavBar from 'src/components/Navbar.vue'
import SideBar from 'src/components/SideBar.vue'
import Main from 'src/components/Main.vue'
</script>

<template>
  <div class="h-screen flex flex-col">
    <NavBar class="h-1/20 border border-red-500 flex justify-center items-center"></NavBar>
    <div class="flex-grow flex">
      <SideBar class="border border-red-500" />
      <Main class="flex-grow" />
    </div>
  </div>
</template>

<style scoped>
</style>