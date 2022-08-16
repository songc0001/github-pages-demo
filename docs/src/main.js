




// vue3-sfc-loader

const options = {
  moduleCache: {
    vue: Vue
  },
  async getFile(url) {

    const res = await fetch(url);
    if (!res.ok)
      throw Object.assign(new Error(res.statusText + ' ' + url), { res });
    return {
      getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text(),
    }
  },
  addStyle(textContent) {

    const style = Object.assign(document.createElement('style'), { textContent });
    const ref = document.head.getElementsByTagName('style')[0] || null;
    document.head.insertBefore(style, ref);
  },
}

const { loadModule } = window['vue3-sfc-loader'];

const { createApp } = Vue

const app = createApp({
  components: {
    'App': Vue.defineAsyncComponent(() => loadModule('./App.vue', options))
  },
  template: '<App></App>'
});

app.config.compilerOptions.delimiters = ['${', '}']

app.config.errorHandler = (err) => {
  /* 处理错误 */
  console.log(err)
}

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)

app.mount('#app');


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
  app.mount("#app")
}


