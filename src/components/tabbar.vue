<template>
  <div class="tabbar">
    <!-- <div v-if="active && active !=0"> -->
    <van-tabbar v-model="active" replace="true" v-if="tabbarShow" :z-index="99">
      <van-tabbar-item :to="item.path" v-for="(item,i) in tabbar" :key="i" replace>
        <span slot-scope="props" :style="{color:props.active ? '#F7CE46' : '#9B9B9B'}" class="f18">{{item.name}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.actImg : item.img"  class="tabbar_img">
      </van-tabbar-item>
    </van-tabbar>
  </div>
  <!-- </div> -->
</template>

<script>

export default {
  props: {
    tabbarArr: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  name: "tabbar",
  data() {
    return {
      active: 0,
      tabbarShow: false,
      tabbar: [
        {
          name: "订单",
          icon: "orders-o",
          path: "index",
          img: require("@/assets/tabbar_icon6.png"),
          actImg: require("@/assets/tabbar_icon1.png"),
        },
        {
          name: "账本",
          icon: "balance-list-o",
          path: "accountBook",
          img: require("@/assets/tabbar_icon2.png"),
          actImg: require("@/assets/tabbar_icon4.png")
        },
        {
          name: "我的",
          icon: "contact",
          path: "my",
          img: require("@/assets/tabbar_icon3.png"),
          actImg: require("@/assets/tabbar_icon5.png")
        }
      ]
    };
  },
  methods: {
    // 判断是否要出现选框
    showHideFlag(name) {
      let active = null;
      let tabbarShow = false;
      for (let item of this.tabbarArr) {
        if (item == name) {
          tabbarShow = true;
        }
      }
      this.tabbarShow = tabbarShow;
      if (tabbarShow) {
        this.tabbar.map((item, i) => {
          if (item.path == name) {
            active = i;
          }
        });
        this.active = active;
      }
    }
  },
  watch: {
    $route(to, from) {
      this.showHideFlag(to.name);
    }
  }
};
</script>

<style lang="less" scoped>
.van-tabbar{
  height: 0.5rem;
  line-height: .5rem;
  
}
.f18{
  font-size: .14rem;  
}
.tabbar_img{
  height: 0.18rem;
}
</style>