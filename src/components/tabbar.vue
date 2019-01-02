<template>
  <div class="tabbar">
    <!-- <div v-if="active && active !=0"> -->
    <van-tabbar v-model="active" active-color="#F7CE46" replace="true" v-if="tabbarShow">
      <van-tabbar-item
        :to="item.path"
        :icon="item.icon"
        v-for="(item,i) in tabbar"
        :key="i"
      >{{item.name}}</van-tabbar-item>
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
      tabbarShow:true,
      tabbar: [
        {
          name: "订单",
          icon: "orders-o",
          path: "index"
        },
        {
          name: "账本",
          icon: "balance-list-o",
          path: "accountBook"
        },
        {
          name: "我的",
          icon: "contact",
          path: "my"
        }
      ]
    };
  },
  methods: {},
  watch: {
    $route(to, from) {
      let active = null;
      let tabbarShow = false;
      for (let item of this.tabbarArr) {
        if (item == to.name) {
          tabbarShow = true;
        }
      }
      this.tabbarShow = tabbarShow;
      if (tabbarShow) {
        this.tabbar.map((item, i) => {
          if (item.path == to.name) {
            active = i;
          }
        });
        this.active = active;
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>