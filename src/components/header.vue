<template>
  <div class="context_box">
    <van-nav-bar fixed  left-text @click-left="onClickLeft" >
      <van-icon name="arrow-left" slot="left" color="#333" size=".16rem" v-if="leftArrow"/>
      <span slot="title" class="header_tit">{{title}}</span>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  name: "headerBox",
  data() {
    return {
      leftArrow: true,
      goPath: false
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
    }
  },
};
</script>

<style lang="less" scoped>
.van-nav-bar{
  height: 0.46rem;
  line-height: .46rem;
  font-size: .16rem;
}
.header_tit{
  font-size: .16rem;
}
</style>