export const setupAll = () => {

  // vue3-sfc-loader  

  const options = {
    moduleCache: {
      'vue': Vue,
      /*'url!'(content, path, type, options) {

        if ( type === '.svg' )
          return `data:image/svg+xml;base64,${btoa(content)}`;
        
        if ( type === '.png' )
          return `data:image/png;base64,${btoa(content)}`;        

        throw new Error(`${ type } not handled by url!`);
      },*/
    },
    handleModule(type, getContentData, path, options) {

      switch (type) {
        case '.json': return JSON.parse(source);
        //case '.svg': return `data:image/svg+xml;base64,${btoa(content)}`;
        //case '.svg': return 'data:image/svg+xml,' + await getContentData(false);
        case '.png': return path;        
        default: return undefined; // let vue3-sfc-loader handle this
      }
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
    log(type, ...args) {

      console.log(type, ...args);
    },
    compiledCache: {
      set(key, str) {

        // naive storage space management
        for (; ;) {

          try {

            // doc: https://developer.mozilla.org/en-US/docs/Web/API/Storage
            window.localStorage.setItem(key, str);
            break;
          } catch (ex) {

            // handle: Uncaught DOMException: Failed to execute 'setItem' on 'Storage': Setting the value of 'XXX' exceeded the quota

            window.localStorage.removeItem(window.localStorage.key(0));
          }
        }
      },
      get(key) {

        return window.localStorage.getItem(key);
      },
    },
  }

  const { loadModule } = window['vue3-sfc-loader'];

  const { createApp } = Vue

  const App = "./src/App.vue"

  const app = createApp({
    components: {
      'my-app': Vue.defineAsyncComponent(() => loadModule(App, options))
    },
    template: 'Hello<my-app/>'
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

}

setupAll()

