/*

*/

"use strict";

import MyHeader from './layout/components/my-header.js'
import MyLayout from './layout/my-layout.js'

export const setupAll = async () => {
  const { createApp } = Vue
  const app = createApp({})  
  app.config.compilerOptions.delimiters = ['${', '}']
  app.config.errorHandler = (err) => {
    /* 处理错误 */
    console.log(err)
  }
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  app.use(ElementPlus)  
  app.component('my-header', MyHeader)
  app.component('my-layout', MyLayout)
  app.mount("#app")
}

setupAll()