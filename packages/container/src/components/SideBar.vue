<script setup lang="ts">
import { routes } from 'src/router/index'
import {
  Location,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log('open', key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log('close', key, keyPath)
}

</script>

<template>
      <div class="border border-red-500 w-1/10">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
            <el-sub-menu v-for="(route, index) in routes.filter(item=>item.meta.menuShow)" :key="index" :index="`${index}`">
                <template #title>
                    <el-icon><location /></el-icon>
                    <span>{{route.name}}</span>
                </template>
                  <el-sub-menu v-for="(r, rIndex) in route.children" :key="rIndex" :index="`${index}-${rIndex}`">
                      <template #title>
                        <router-link :to="r.path"><span>{{r.name}}</span></router-link>
                      </template>
                  </el-sub-menu>
            </el-sub-menu>
        </el-menu>
      </div>
</template>

