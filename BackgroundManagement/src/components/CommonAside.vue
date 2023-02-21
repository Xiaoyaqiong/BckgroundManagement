<template>
    <el-col>
      <h5 class="mb-2">通用后台管理</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="$store.state.isCollapse"
      >
        
        <el-menu-item v-for="item in nochildren()" :key="item.name" @click="handleMenu(item)" :index="item.name">
          <el-icon><component class="icons" :is="item.icon"></component></el-icon>
          <span>{{item.label}}</span>
        </el-menu-item>
        
        <el-sub-menu v-for="(item,index) in haschildren()" :key="index">
            <template #title>
              <el-icon><component class="icons" :is="item.icon"></component></el-icon>
              <span>{{item.label}}</span>
            </template>
            <el-menu-item v-for="subitem in item.children" :key="subitem.name" @click="handleMenu(subitem)" :index="subitem.name">
              <el-icon><component class="icons" :is="subitem.icon"></component></el-icon>
                <span>{{subitem.label}}</span>
            </el-menu-item>
        </el-sub-menu>

      </el-menu>
    </el-col>
  
</template>
<script>
  // const list=
  //   [
  //       {
  //         path: '/',
  //         name: 'home',
  //         label: '首页',
  //         icon: 'house',
  //         url: 'Home/Home'
  //       },
  //       {
  //         path: '/mall',
  //         name: 'mall',
  //         label: '商品管理',
  //         icon: 'video-play',
  //         url: 'MallManage/MallManage'
  //       },
  //       {
  //         path: '/user',
  //         name: 'user',
  //         label: '用户管理',
  //         icon: 'user',
  //         url: 'UserManage/UserManage'
  //       },
  //       {
  //         label: '其他',
  //         icon: 'location',
  //         children: [
  //           {
  //             path: '/page1',
  //             name: 'page1',
  //             label: '首页',
  //             icon: 'setting',
  //             url: 'Other/PageOne'
  //           },
  //           {
  //             path: '/page2',
  //             name: 'page2',
  //             label: '首页',
  //             icon: 'setting',
  //             url: 'Other/PageTwo'
  //           }
  //         ]
  //       }
  //     ]
  //   // const haschildren=list.filter(item.children)
  //   console.log(list.filter((item)=>{
  //     return item.children
  //   }))
import {useRouter} from 'vue-router'
import router from '../router/index.js'
export default {
  setup(){
    const list=
    [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '首页',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '首页',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ];
      const nochildren=()=>{
        return list.filter((item)=>{return !item.children})
      };
      const haschildren=()=>{
        return list.filter((item)=>{return item.children})
      };
      // console.log(list.filter((item)=>{return item.children}));
      const handleMenu=(item)=>{
        router.push({name:item.name})
      }
      return {nochildren,haschildren,handleMenu};
  }
  
};
</script>