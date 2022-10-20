// 在index.html載入
// import * as Vue from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

import { loadModule } from "./vue3-sfc-loader.esm.js"

const options1 = {
  moduleCache: { 'vue': Vue },
  async getFile(url) {
    // console.log(url);
    const res = await fetch(url);
    // console.log(res);
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
  handleModule: async function (type, getContentData, path, options) {

    switch (type) {
      case '.json': return JSON.parse(source);
      //case '.svg': return `data:image/svg+xml;base64,${btoa(content)}`;
      //case '.svg': return 'data:image/svg+xml,' + await getContentData(false);
      case '.png': return path;
      case '.css': {
        options.addStyle(await getContentData(false));
        return null;
      };
      case '.svg':
        // return `data:image/svg+xml;base64,${btoa(content)}`;
        return `data:image/svg+xml;base64,${btoa(await getContentData(false))}`;
      default: return undefined; // let vue3-sfc-loader handle this
    }
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


const options2 = {
  moduleCache: { 'vue': Vue },
  /* async getFile(url) {
    // console.log(url);
    const res = await fetch(url);
    // console.log(res);
    if (!res.ok)
      throw Object.assign(new Error(res.statusText + ' ' + url), { res });
    return {
      getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text(),
    }
  }, */
  /* async getFile(url) {
    const res = await fetch(url);
    if (!res.ok)
      throw Object.assign(new Error(url + " " + res.statusText), { res });
    let content = await res.text();
    content = url.endsWith(".js")
      ? { content: content, type: ".mjs" } // `type` since v0.7.0 and `extname` before
      : content;
    return content;
  },*/
  getFile(url) {
    return fetch(url).then(res => {
      if (!res.ok) throw Object.assign(new Error(url + " " + res.statusText), { res });
      return res.text().then(content => {
        if (/.*?\.js$/.test(url)) {
          return { content: content, type: ".mjs" }
        }
        return content;
      })
    })
  },
  addStyle(textContent) {
    const style = Object.assign(document.createElement('style'), { textContent });
    const ref = document.head.getElementsByTagName('style')[0] || null;
    document.head.insertBefore(style, ref);
  },
  handleModule: async function (type, getContentData, path, options) {

    switch (type) {
      case '.json': return JSON.parse(source);
      //case '.svg': return `data:image/svg+xml;base64,${btoa(content)}`;
      //case '.svg': return 'data:image/svg+xml,' + await getContentData(false);
      case '.png': return path;
      case '.css': {
        options.addStyle(await getContentData(false));
        return null;
      };
      case '.svg':
        // return `data:image/svg+xml;base64,${btoa(content)}`;
        return `data:image/svg+xml;base64,${btoa(await getContentData(false))}`;
      default: return undefined; // let vue3-sfc-loader handle this
    }
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

// For Test
const optionstest = {
  moduleCache: { vue: Vue },
  getFile: () => `<template>vue3-sfc-loader esm version</template>`,
  addStyle: () => { },
}

// Example: Use Options.getResource() and process the files (nearly) like webpack does
// TODO: 失敗，做唔到，有機會睇下改唔改
const config = {
  files: {
    '/main.vue': {
      getContentData: () => /* <!-- */`
        <template>
          <pre><b>'url!./circle.svg' -> </b>{{ require('url!./circle.svg') }}</pre>
          <img width="50" height="50" src="~url!./circle.svg" />
          <pre><b>'file!./circle.svg' -> </b>{{ require('file!./circle.svg') }}</pre>
          <img width="50" height="50" src="~file!./circle.svg" /> <br><i>(image failed to load, this is expected since there is nothing behind this url)</i>
        </template>
      `/* --> */,
      type: '.vue',
    },
    '/circle.svg': {
      getContentData: () => /* <!-- */`
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" />
        </svg>
      `/* --> */,
      type: '.svg',
    }
  }
};

const optionsVoid1 = {
  moduleCache: {
    'vue': Vue,
    'file!'(content, path, type, options) {

      return String(new URL(path, window.location));
    },
    'url!'(content, path, type, options) {

      if (type === '.svg')
        return `data:image/svg+xml;base64,${btoa(content)}`;

      throw new Error(`${type} not handled by url!`);
    },
  },
  handleModule(type, getContentData, path, options) {

    switch (type) {
      case '.svg': return getContentData(false);
      default: return undefined; // let vue3-sfc-loader handle this
    }
  },
  getFile(url, options) {
    // console.log(url)
    return config.files[url] || (() => { throw new Error('404 ' + url) })();
  },
  getResource({ refPath, relPath }, options) {

    const { moduleCache, pathResolve, getFile } = options;

    // split relPath into loaders[] and file path (eg. 'foo!bar!file.ext' => ['file.ext', 'bar!', 'foo!'])
    const [resourceRelPath, ...loaders] = relPath.match(/([^!]+!)|[^!]+$/g).reverse();

    // helper function: process a content through the loaders
    const processContentThroughLoaders = (content, path, type, options) => {

      return loaders.reduce((content, loader) => {

        return moduleCache[loader](content, path, type, options);
      }, content);
    }

    // get the actual path of the file
    const path = pathResolve({ refPath, relPath: resourceRelPath });

    // the resource id must be unique in its path context
    const id = loaders.join('') + path;

    return {
      id,
      path,
      async getContent() {
        // console.log(path)
        const { getContentData, type } = await getFile(path);
        console.log({ getContentData: async (asBinary) => processContentThroughLoaders(await getContentData(asBinary), path, type, options) });
        return {
          getContentData: async (asBinary) => processContentThroughLoaders(await getContentData(asBinary), path, type, options),
          type,
        };
      }
    };
  },
  addStyle() { /* unused here */ },
}

const options = options2
export { loadModule, options };
