<template>
  <div class="context_box">
    <van-nav-bar :title="title" left-text @click-left="onClickLeft" :left-arrow="leftArrow" v-if="headerShow"/>
  </div>
</template>

<script>
export default {
  props: {
    headerArr: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  name: "headerBox",
  data() {
    return {
      leftArrow: true,
      title: "",
      goPath: false,
      headerShow:true
    };
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
  watch: {
    $route(to, from) {
      this.goPath = to.meta.goPath;
      this.leftArrow = !to.meta.goPath ? false : true;
      this.title = to.meta.title;
      let headerShow = true;
      for (let item of this.headerArr) {
        if (item == to.name) {
          headerShow = false;
        }
      }
      this.headerShow = headerShow;
    }
  }
};
</script>

<style lang="less" scoped>
</style>