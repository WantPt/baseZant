<template>
  <div
    :style="{minHeight:'100vh',paddingTop:headerShow?'.46rem':'0px',paddingBottom:tabbarShow?'.5rem':'0px'}"
  >
    <headerBox v-if="headerShow" :title="title" :goPath="goPath" :leftArrow="leftArrow"/>
    <transition name="bounce" mode="out-in">
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
    </transition>
    <tabbar :tabbarArr="tabbarArr"></tabbar>
  </div>
</template>

<script>
import tabbar from "./components/tabbar";
import headerBox from "./components/header";
export default {
  name: "App",
  components: { tabbar, headerBox },
  data() {
    return {
      tabbarArr: ["index", "accountBook", "my"], //暂时tabbar的页面
      title: "",
      headerShow: true,
      tabbarShow: false,
      goPath:-1,
      leftArrow:false
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
  created() {
    console.log(
      [
        "%c                     .::,                  ,    :    .'",
        "                    ,::::::,                 '    '    ,'",
        "                   ,:.     :,                 '.   '.   `'",
        "                   :        : ,:::,            ':   ':    ': ",
        "                            ::,` `::            :'   :'    :.",
        "                            .`     ,:            :'   :'    '",
        "                            `       :             `'   .'",
        "             `:::::,                :              `,   ,",
        "            ::,    ,,              `;,...           :    :  :",
        "           ::,                ,''''''''''''''',          .  `",
        "          `::              :''''''''''''''''''''':  `    , :",
        "          ::.           .''''''''''''''''''''''''''''   .  .",
        "          ::          ,'''''''''''''''''''''''''''''''. '",
        "          ::        .'''''''''''''''''''''''''''''''''''`",
        "          ,::      ''''''''''''',             .:''''''''':",
        "           :::,``:'''''''''':                     `:'''''''",
        "            `,::''''''''':       .:''''':.            :''''':",
        "              `'''''''':      :'''',                    `'''''",
        "             :''''''''     .''''`                          :'''",
        "           :'''''''.    .''':                                :'':",
        "           ''''''''     ''':                                   '':",
        "          ''''''':    :'':                                       `':",
        "         '''''''`    ''',                                           ::",
        "        '''''''     '''                                               :",
        "       '''''''     '''                            想吃--享吃            :",
        "                                  '''''''''''''''''''''''''''''''''''''",
        "      '''''''''''''''''''''''''''''''''''''       "
      ].join("\n"),
      "color: #fad144;"
    );
  }
};
</script>

<style>
</style>
