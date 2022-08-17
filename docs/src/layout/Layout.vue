<template>
  <el-container>
    <el-header justify="center">
      <!-- NavMeun -->      
      <el-menu mode="horizontal" >        
        <!-- 左上個LOGO -->
        <div class="logo">
          <el-button link>My Web Pages</el-button>
        </div>
        <el-menu-item index="1">Tools</el-menu-item>
        <el-menu-item index="2">Blog</el-menu-item>        
      </el-menu>      
    </el-header>

    <el-main>Main</el-main>
  </el-container>
</template>

<style scoped>
.logo{
  display:flex;
  vertical-align: middle;
}

</style>