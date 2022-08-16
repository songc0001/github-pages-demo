"use strict";

export default {
  name: 'MyLayout',
  props: {
    message: {
      default: ""
    }
  },
  template: `     
    <div class="common-layout">
      <el-container direction="vertical">
        <my-header></my-header>
        <el-main style="
          position: absolute;
          top: 60px;"
        >
          <el-scrollbar>               
            <p v-for="item in 100" :key="item" >$\{ item }</p>
          </el-scrollbar>       
        </el-main>        
      </el-container>      
    </div>
  `
}