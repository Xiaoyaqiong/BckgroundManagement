<template>
    <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px;">
      <el-card shadow="hover">
        <div class="user">
          <img src="../assets/logo.png" alt="">
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>

        <div class="login-info">
          <p>上次登录时间：<span>2021-7-19</span></p>
          <p>上次登录地点：<span>武汉</span></p>
        </div>
      </el-card>

      <el-card style="margin-top: 20px; height: 460px;">
          <el-table :data="tableData">
            <el-table-column 
             v-for="(item,index) in tableLabel"
            :prop="index" 
            :label="item" 
            width="80"/>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
     

    </el-col>

  </el-row>
</template>
<style >
    
</style>
<script>
    export default{
        setup(){
           const tableLabel={
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      };
       const tableData=[
                        {
                            name: 'oppo',
                            todayBuy: 100,
                            monthBuy: 300,
                            totalBuy: 800
                        },
                        {
                            name: 'vivo',
                            todayBuy: 100,
                            monthBuy: 300,
                            totalBuy: 800
                        },
                        {
                            name: '苹果',
                            todayBuy: 100,
                            monthBuy: 300,
                            totalBuy: 800
                        },
                        {
                            name: '小米',
                            todayBuy: 100,
                            monthBuy: 300,
                            totalBuy: 800
                        },
                        {
                            name: '三星',
                            todayBuy: 100,
                            monthBuy: 300,
                            totalBuy: 800
                        },
                        {
                            name: '魅族',
                        todayBuy: 100,
                            monthBuy: 300,
                            totalBuy: 800
                        }
          ];
      const countData=[
        {
          name: '今日支付订单',
          value: 1235,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          name: '本月支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '本月收藏订单',
          value: 200,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '本月未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        }
      ];
            return {tableData,tableLabel}
        }
    }
</script>