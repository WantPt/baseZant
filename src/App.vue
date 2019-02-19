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
    },
    stopDrop() {
        var lastY;//最后一次y坐标点
        $(document.body).on('touchstart', function(event) {
            lastY = event.originalEvent.changedTouches[0].clientY;//点击屏幕时记录最后一次Y度坐标。
        });
        $(document.body).on('touchmove', function(event) {
            var y = event.originalEvent.changedTouches[0].clientY;
            var st = $(this).scrollTop(); //滚动条高度  
            if (y >= lastY && st <= 10) {//如果滚动条高度小于0，可以理解为到顶了，且是下拉情况下，阻止touchmove事件。
                lastY = y;
                event.preventDefault();
            }
            lastY = y;
     
        });
    }
  },
  
  created() {
    this.stopDrop();
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
.van-nav-bar{
  height: 0.46rem;
  line-height: .46rem;
  font-size: .16rem;
}
.header_tit{
  font-size: .16rem;
}
</style>
