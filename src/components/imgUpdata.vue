<template>
  <div>
    <div class="oss_file">
      <div class="demo-upload-listcenFlex">
        <van-uploader :after-read="onRead" :multiple="multiple"></van-uploader>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "../service/service";
const api = "/api";
import { getOSSToken } from "@/service/serviceLcm";
export default {
  props: {
    multiple: {
      type: Boolean,
      default: () => {
        return false;
      }
    }
  },
  data() {
    return {
      region: "oss-cn-hangzhou",
      bucket: "ydplatform",
      id: "upload",
      visible: false,
      imgUrl: ""
    };
  },
  methods: {
    onRead(file) {
      let params = new FormData(); //创建form对象
      params.append("file", file.file); //通过append向form对象添加数据//第一个参数字符串可以填任意命名，第二个根据对象属性来找到file
      let config = {
        headers: {
          //添加请求头
          "Content-Type": "multipart/form-data"
        }
      };
      let url = api + "/sys/eat/oss";
      axios.post(url, params, config).then(res => {
        this.$emit("updata", res.data.results);
      });
    }
  }
};
</script>
<style type="text/css">
.oss_file {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.oss_file input {
  right: 0;
  top: 0;
  opacity: 0;
  filter: alpha(opacity=0);
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
  display: flex;
  flex-wrap: wrap;
}

.imageUp_box {
  width: 60px;
  height: 60px;
  min-width: 60px;
  position: relative;
  border: 1px #999 dashed;
  border-radius: 5px;
}

.demo-upload-list {
  display: inline-block;
  width: 80px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
  margin-bottom: 10px;
}

.demo-upload-list .icon {
  width: 100%;
  height: 100%;
}

.demo-upload-list img {
  width: 100%;
  height: 100%;
}

.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}

.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}

.demo-upload-list-cover i {
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  margin: 0 2px;
  display: inline-block;
  font-family: Ionicons;
  position: relative;
  z-index: 999;
}

.cenFlex {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
