"use strict";

export default {
  name: 'MyHeader',
  props: {
    activeIndex: {
      default: "1"
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  },
  template: `
    <el-affix>    
      <el-header style="
        position: relative;
        width:100%;
        height: 60px;              
        background-color: var(--el-bg-color);"
      >
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <el-menu-item index="0">LOGO</el-menu-item>          

          <el-menu-item index="1">Menu 1</el-menu-item>

          <el-sub-menu index="2">
            <template #title>Menu 2</template>
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

          <div style="flex-grow: 1;" />

          <el-menu-item index="3">            
            <el-dropdown>                                           
                  <el-icon style="height: 58px"><Setting /></el-icon>                                                      
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Action 1</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>              
          </el-menu-item>  


        </el-menu>      
      </el-header>
    </el-affix>
  `
}