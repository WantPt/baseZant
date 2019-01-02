<template>
  <div class="context_box">
    <headerBox :headerArr="headerArr" />
    <transition name="move" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <tabbar :tabbarArr="tabbarArr"></tabbar>
  </div>
</template>

<script>
import tabbar from "./components/tabbar";
import headerBox from "./components/header";
export default {
  name: "App",
  components: { tabbar,headerBox },
  data() {
    return {
      headerArr:['index'],//不展示头部的页面
      tabbarArr:['index','accountBook','my'],//暂时tabbar的页面
    };
  },
  
};
</script>

<style>
</style>
