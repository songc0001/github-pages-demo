<template>
  <el-container class="common-layout" direction="vertical">
    <el-header>
      <NavBar />
    </el-header>
    <el-main>
      <!-- Main -->
      <el-button text>My Web Pages</el-button>
      <el-button text>您好</el-button>
    </el-main>
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


