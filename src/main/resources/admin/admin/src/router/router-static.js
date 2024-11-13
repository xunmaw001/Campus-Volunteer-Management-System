import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import chat from '@/views/modules/chat/list'
    import dictionary from '@/views/modules/dictionary/list'
    import feihuodong from '@/views/modules/feihuodong/list'
    import feihuodongYuyue from '@/views/modules/feihuodongYuyue/list'
    import feizhiyuan from '@/views/modules/feizhiyuan/list'
    import forum from '@/views/modules/forum/list'
    import gonggao from '@/views/modules/gonggao/list'
    import zhihuodong from '@/views/modules/zhihuodong/list'
    import zhihuodongYuyue from '@/views/modules/zhihuodongYuyue/list'
    import zhiyuanzhe from '@/views/modules/zhiyuanzhe/list'
    import zhiyuanzheLiuyan from '@/views/modules/zhiyuanzheLiuyan/list'
    import config from '@/views/modules/config/list'
    import dictionaryChat from '@/views/modules/dictionaryChat/list'
    import dictionaryFeihuodong from '@/views/modules/dictionaryFeihuodong/list'
    import dictionaryFeihuodongYuyueYesno from '@/views/modules/dictionaryFeihuodongYuyueYesno/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryZhihuodong from '@/views/modules/dictionaryZhihuodong/list'
    import dictionaryZhihuodongYuyueYesno from '@/views/modules/dictionaryZhihuodongYuyueYesno/list'
    import dictionaryZhuangtai from '@/views/modules/dictionaryZhuangtai/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryChat',
        name: '数据类型',
        component: dictionaryChat
    }
    ,{
        path: '/dictionaryFeihuodong',
        name: '活动类型',
        component: dictionaryFeihuodong
    }
    ,{
        path: '/dictionaryFeihuodongYuyueYesno',
        name: '报名状态',
        component: dictionaryFeihuodongYuyueYesno
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryZhihuodong',
        name: '活动类型',
        component: dictionaryZhihuodong
    }
    ,{
        path: '/dictionaryZhihuodongYuyueYesno',
        name: '报名状态',
        component: dictionaryZhihuodongYuyueYesno
    }
    ,{
        path: '/dictionaryZhuangtai',
        name: '状态',
        component: dictionaryZhuangtai
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/chat',
        name: '客服聊天',
        component: chat
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/feihuodong',
        name: '活动',
        component: feihuodong
      }
    ,{
        path: '/feihuodongYuyue',
        name: '活动报名',
        component: feihuodongYuyue
      }
    ,{
        path: '/feizhiyuan',
        name: '非志愿者',
        component: feizhiyuan
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/zhihuodong',
        name: '志愿者活动',
        component: zhihuodong
      }
    ,{
        path: '/zhihuodongYuyue',
        name: '志愿者活动报名',
        component: zhihuodongYuyue
      }
    ,{
        path: '/zhiyuanzhe',
        name: '志愿者',
        component: zhiyuanzhe
      }
    ,{
        path: '/zhiyuanzheLiuyan',
        name: '志愿者留言',
        component: zhiyuanzheLiuyan
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
