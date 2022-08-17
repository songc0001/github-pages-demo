<template>  
  <el-image style="width: 100px; height: 100px" alt="Vue logo" :src="urls" />
  <HelloWorld msg="Hello Vue 3 in CodeSandbox!" />
</template>

<script>
import HelloWorldVue from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld: HelloWorldVue
  },
  data() {
    return {
      urls: './src/assets/img/logo.png'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
