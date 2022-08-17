<template>  
    <!-- NavMeun -->
    <el-menu mode="horizontal">
      <!-- 左上個LOGO -->
      <div class="logo">
        <el-button link>My Web Pages</el-button>
      </div>
      <el-menu-item index="1">Tools</el-menu-item>
      <el-menu-item index="2">Blog</el-menu-item>
    </el-menu>  
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.logo{
  display:flex;
  height: var(--el-menu-item-height);
  vertical-align: middle;
}

</style>