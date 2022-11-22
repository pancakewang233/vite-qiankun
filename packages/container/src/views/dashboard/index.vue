<script setup lang="ts">
import NavBar from 'src/components/Navbar.vue'
import SideBar from 'src/components/SideBar.vue'
import Main from 'src/components/Main.vue'
</script>

<template>
  <div h-screen flex flex-col>
    <NavBar h-20 border border-red-500 />
    <div flex-grow flex >
      <SideBar w-100 border border-red-500 />
      <Main  flex-grow />
    </div>
  </div>
</template>

<style scoped>
</style>