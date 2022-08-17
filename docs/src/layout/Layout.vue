<template>
  <el-container direction="vertical">
    <el-header>
      <NavBar />
    </el-header>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
  name: 'Layout',
  components: {
    NavBar
  }
}
</script>

