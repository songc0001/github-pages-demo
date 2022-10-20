<script>
import BaseHeader from './layouts/BaseHeader.vue'
import BaseSide from './layouts/BaseSide.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseSide,
    HelloWorld,
  }
}
</script>

<template>
  <!-- 
    In example, the namespace changed to "ep".
    I can not use scss. Thus, I can not use 'el-config-provider' to change the namespace.
    The method of changing the namespace is directly change in the css.
  -->
  <!-- <el-config-provider namespace="el"> -->
    <BaseHeader />
    <div style="display: flex">
      <BaseSide />
      <div>
        <img alt="Vue logo" class="element-plus-logo" src="./assets/img/logo.png" />
        <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" />
      </div>
    </div>
  <!-- </el-config-provider> -->
</template>


<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}
.element-plus-logo {
  width: 50%;
}
</style>