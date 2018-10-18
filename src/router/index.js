import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Cockpit from '@/components/cockpit'  //驾驶舱
import Cockpit1 from '@/components/cockpit1'  //驾驶舱
import Overview from '@/components/overview'  //总概览
import ShopInfo from '@/components/shopinfo'  //店铺信息

import Shoplist from '@/components/shoplist' //门店会员
import Userpicture from '@/components/userpicture' //用户画像

import Usercenter from '@/components/usercenter' //用户中心

import Login from '@/components/login' //用户名
import Resetpassword from '@/components/resetpassword'  //重置密码
import Changepw from '@/components/changepw'  //修改密码


import Main from '@/components/main'  //主菜单

//权限
import User from '@/components/power/user' //用户管理
import Role from '@/components/power/role' //角色管理
import Store from '@/components/power/store' //门店管理
import System from '@/components/power/system' //系统日志
// //黑名单
// // import Blackadd from '@/components/black/blackadd' //黑名单添加 不作了
// import Blacklist from '@/components/black/blacklist' //黑名单库


//黑名单
import Blackadd from '@/components/black/blackadd' //黑名单添加 跳->抓取照片
import Blacklist from '@/components/black/blacklist' //黑名单库
import Blackanalyse from  '@/components/black/blackanalyse' // 黑名单分析
import Passenger from '@/components/black/passenger'  //客流分析

//摄像头抓拍->系统管理
// import Browse from '@/components/snap/browse' //抓拍照片浏览
// import Personal from '@/components/snap/personal' //抓拍个人 不做了
//摄像头管理
import Camera from '@/components/snap/camera'  //摄像头管理
//底库照片管理
import BottomPhoto from '@/components/snap/bottomPhoto'  //底库照片管理

// 旧版顾客中心
// import Usercenter2 from '@/components/usercenter2'  //底库照片管理




Vue.use(Router)

export default new Router({
//mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior (to, from, saveposition) {
      $("a[data-url='"+ to.fullPath +"']").parent().parent().addClass('is-active');      
      $("a[data-url='"+ from.fullPath +"']").parent().parent().removeClass('is-active');  
      if( to.fullPath == '/Overview'){
        $("a[data-url='/overview']").parent().parent().addClass('is-active');
      }    
      if( to.fullPath == '/cockpit1'){
        $("a[data-url='/cockpit']").parent().parent().addClass('is-active');        
      }  
      if( to.fullPath == '/shopinfo'){
        $("a[data-url='/overview']").parent().parent().addClass('is-active');
      }
      if( to.fullPath == '/userpicture'){
        $("a[data-url='/shoplist']").parent().parent().addClass('is-active');
      }
      if( to.fullPath== '/usercenter'){
        $("a[data-url='/shoplist']").parent().parent().removeClass('is-active'); 
      }
      if( to.fullPath == '/snap/personal'  ){
        $("a[data-url='/snap/browse']").parent().parent().addClass('is-active'); 
      }
    // if (saveposition) {
    //   return saveposition
    // } else {
    //   return {
    //     x: 0,
    //     y: 0
    //   }
    // }

    if (to.hash) {
      return {
        selector: to.hash
      }
    }

    

  },
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/resetpassword',
      name: 'Resetpassword',
      component: Resetpassword
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
      // redirect: sessionStorage.getItem("URL") , //动态获取第一个显示页面
      meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      children:[
        {
          path: '/changepw',name: 'Changepw',component: resolve => require(['@/components/Changepw'],resolve),meta: {requireAuth: true}
        },
        {
          path: '/cockpit',name: 'Cockpit',component: resolve => require(['@/components/Cockpit'],resolve),meta: {requireAuth: true}
          
        },
        {
          path: '/cockpit1',name: 'Cockpit1',component: resolve => require(['@/components/Cockpit1'],resolve),meta: {requireAuth: true}
          
        },
        
        {
          path: '/overview',name: 'Overview',component: resolve => require(['@/components/Overview'],resolve),meta: {requireAuth: true}
        },
        {
          path: '/shopinfo',name: 'ShopInfo',component: resolve => require(['@/components/ShopInfo'],resolve),meta: {requireAuth: true}
           
        },
        {
          path: '/shoplist',name: 'Shoplist',component: resolve => require(['@/components/Shoplist'],resolve),meta: {requireAuth: true}
        },
        {
          path: '/usercenter',name: 'Usercenter',component: resolve => require(['@/components/Usercenter'],resolve),meta: {requireAuth: true}
        },
        {
          path: '/userpicture',name: 'Userpicture',component: resolve => require(['@/components/Userpicture'],resolve),meta: {requireAuth: true}
        },
        {
          path: '/power/user',name: 'User',component: resolve => require(['@/components/power/User'],resolve),meta: {requireAuth: true}
        },
        {
          path: '/power/role',name: 'Role',component: resolve => require(['@/components/power/Role'],resolve),meta: {requireAuth: true}
        },
        {
          path: '/power/store',name: 'Store',component: resolve => require(['@/components/power/Store'],resolve),meta: {requireAuth: true}
        },
        {
          path: '/power/system',name: 'System',component: resolve => require(['@/components/power/System'],resolve),meta: {requireAuth: true}
        },

        // {
        //   path: '/black/blackadd',name: 'Blackadd',component: resolve => require(['@/components/black/Blackadd'],resolve),meta: {requireAuth: true}
        // },
          //  黑名单->黑名单添加->抓取照片
          {
            path: '/black/blackadd',name: 'Blackadd',component: resolve => require(['@/components/black/Blackadd'],resolve),meta: {requireAuth: true}
          },
          // 黑名单库
          {
            path: '/black/blacklist',name: 'Blacklist',component: resolve => require(['@/components/black/Blacklist'],resolve),meta: {requireAuth: true}
          },
           // 黑名单分析
          {
            path: '/black/blackanalyse',name: 'Blackanalyse',component: resolve => require(['@/components/black/Blackanalyse'],resolve),meta: {requireAuth: true}
          },
          //客流报表
          {
            path: '/black/passenger',name: 'Passenger',component: resolve => require(['@/components/black/passenger'],resolve),meta: {requireAuth: true}
          },
        // //黑名单
        // {
        //   path: '/black/blacklist',name: 'Blacklist',component: resolve => require(['@/components/black/Blacklist'],resolve),meta: {requireAuth: true}
        // },
        // // 系统管理-> 抓取照片
        // {
        //   path: '/snap/browse',name: 'Browse',component: resolve => require(['@/components/snap/Browse'],resolve),meta: {requireAuth: true}
        // },
        // // {
          // path: '/snap/personal',name: 'Personal',component: resolve => require(['@/components/snap/Personal'],resolve),meta: {requireAuth: true}
        // } ,
        {
          path: '/snap/camera',name: 'Camera',component: resolve => require(['@/components/snap/Camera'],resolve),meta: {requireAuth: true}
        }, 
        {
          path: '/snap/bottomPhoto',name: 'BottomPhoto',component: resolve => require(['@/components/snap/BottomPhoto'],resolve),meta: {requireAuth: true}
        },
        // {
        //   path: '/usercenter2',name: 'Usercenter2',component: resolve => require(['@/components/Usercenter2'],resolve),meta: {requireAuth: true}
        // }

      ]
    
    }

  ]
})
