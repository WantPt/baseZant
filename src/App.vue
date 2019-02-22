<template>
  <div
    :style="{minHeight:'100vh',paddingTop:headerShow?'.46rem':'0px',paddingBottom:tabbarShow?'.5rem':'0px'}"
  >
    <!-- <headerBox v-if="headerShow" :title="title" :goPath="goPath" :leftArrow="leftArrow"/> -->

    <van-nav-bar fixed left-text @click-left="onClickLeft" v-if="headerShow">
      <van-icon name="arrow-left" slot="left" color="#333" size=".16rem" v-if="leftArrow"/>
      <span slot="title" class="header_tit">{{title}}</span>
    </van-nav-bar>
    <transition name="bounce" mode="out-in">
      <keep-alive :include="aliveArr">
        <router-view></router-view>
      </keep-alive>
    </transition>
    <tabbar :tabbarArr="tabbarArr"></tabbar>
  </div>
</template>

<script>
import tabbar from "./components/tabbar";
// import headerBox from "./components/header";
export default {
  name: "App",
  components: { tabbar },
  data() {
    return {
      tabbarArr: ["index", "accountBook", "my"], //暂时tabbar的页面
      title: "",
      headerShow: true,
      tabbarShow: false,
      goPath: -1,
      leftArrow: false,
      aliveArr: []
    };
  },
  watch: {
    $route(to, from) {
      this.goPath = to.meta.goPath;
      this.leftArrow = !to.meta.goPath ? false : true;
      this.title = to.meta.title;
      this.headerShow = !to.meta.title ? false : true;
      let tabbarShow = false;
      this.goPath = to.meta.goPath;
      this.leftArrow = !to.meta.goPath ? false : true;
      for (let item of this.tabbarArr) {
        if (item == to.name) {
          tabbarShow = true;
        }
      }
      this.tabbarShow = tabbarShow;
    }
  },
  methods: {
    onClickLeft() {
      if (this.goPath && typeof this.goPath == "string") {
        this.$router.push(this.goPath);
      } else if (this.goPath && typeof this.goPath == "number") {
        this.$router.go(this.goPath);
      }
    }
  },

  created() {
    console.log(
      "%c",
      "background: url(https://graph.baidu.com/resource/138b2ebb99f890c8b8c7c01543836115.jpg) no-repeat center; background-size:100% 100%;padding-left:150px;padding-bottom: 150px;margin-left:640px;"
    );
    console.log(
      [
        "%c                   _ooOoo_",
        "                  o8888888o",
        '                  88" . "88',
        "                  (| -_- |)",
        "                  O\\  =  /O",
        "               ____/`---'\\____",
        "             .'  \\\\|     |//  `.",
        "            /  \\\\|||  :  |||//  \\",
        "           /  _||||| -:- |||||-  \\",
        "           |   | \\\\\\  -  /// |   |",
        "           | \\_|  ''\\---/''  |   |",
        "           \\  .-\\__  `-`  ___/-. /",
        "         ___`. .'  /--.--\\  `. . __",
        '      ."" \'<  `.___\\_<|>_/___.\'  >\'"".',
        "     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |",
        "     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /",
        "======`-.____`-.___\\_____/___.-`____.-'======",
        "                   `=---='",
        "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
      ].join("\n"),
      "color: #fad144;"
    );
    console.log(
      "%c     佛祖保佑   T_T    永无BUG",
      "color: #fa4844;font-size: 16px;font-weight: bold"
    );
  }
};
</script>

<style>
.van-nav-bar {
  height: 0.46rem;
  line-height: 0.46rem;
  font-size: 0.16rem;
}
.header_tit {
  font-size: 0.16rem;
}
</style>
