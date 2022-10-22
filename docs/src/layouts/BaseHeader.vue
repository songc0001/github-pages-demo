<script>
import { isDark, toggleDark } from '../composables/dark.mjs'

export default {
  name: 'BaseHeader',
  setup() {
  //  const { isDark, toggleDark } = useDarks()
    return { isDark, toggleDark }
  }
}
</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">Element Plus</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
    <el-menu-item>
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--el-menu-item-height);"
        @click="toggleDark()"
      >        
        <span inline-flex>{{ isDark ? "Dark" : "Light" }}</span>
      </button>      
    </el-menu-item>
  </el-menu>
</template>