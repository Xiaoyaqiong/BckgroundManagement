<template>
<div class="header">
    <el-container>
        <el-button @click="handlecollapse()">
            <el-icon>
                <Menu/>
            </el-icon>
        </el-button>
        <span>首页</span>
    </el-container>

    
    <el-dropdown>
        <el-avatar :size="30" :src="getAssetsFile('vue')"></el-avatar>
        <!-- <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>
                    <el-button @click="outLogin()">退出登录</el-button>
                </el-dropdown-item>
        </el-dropdown-menu> -->
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>
                        <el-button @click="outLogin()">退出登录</el-button>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
    </el-dropdown>
    
</div>
</template>
<style>
    
    .header{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    el-button{
        height: 10px;
    }
</style>
<script>
import {useStore} from 'vuex'
import store from '../store/tab.js'
// 获取assets静态资源
export default {
  setup(){
        const getAssetsFile = (name) => {
            return new URL(`../assets/${name}.svg`, import.meta.url).href;
        }
        const handlecollapse=()=>{
            store.commit('changeCollapse')
        }
        return {getAssetsFile,handlecollapse}
  }
};
</script>