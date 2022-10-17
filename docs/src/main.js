// 在index.html載入
// import { createApp, defineAsyncComponent } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

import { loadModule, options } from '../src/plugin/vue3-sfc-loader/index.js'

// vue3-sfc-loader要用defineAsyncComponent載入Vue
// createApp(defineAsyncComponent(() => loadModule('../src/App.vue', options))).mount(document.body);

// const { createApp } = Vue

const App = "../src/App.vue";

const app = Vue.createApp(Vue.defineAsyncComponent(() => loadModule(App, options)));

app.component('HelloWorld', Vue.defineAsyncComponent(() => loadModule('../src/components/HelloWorld.vue', options)))

app.config.compilerOptions.delimiters = ['${', '}']

app.config.errorHandler = (err) => {
  /* 处理错误 */
  console.log(err)
}

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus);

app.mount('#app');