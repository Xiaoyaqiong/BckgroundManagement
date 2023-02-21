<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <common-aside></common-aside>
      </el-aside>
      <el-container>
        <el-header style="font-size: 12px"><common-header></common-header></el-header>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>
<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }
</style>

<script>
import {defineComponent} from 'vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonAside from '../components/CommonAside.vue'
export default defineComponent({
  
  components:{
     CommonHeader,
     CommonAside,
  },
  setup(){

  }

});
</script>
