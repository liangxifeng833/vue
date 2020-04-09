import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//引入测试相关组件
import index from '@/components/index'
import A from '@/components/A'
import B from '@/components/B'
import A1 from '@/components/A1'
import First from '@/components/First'
Vue.use(Router)

export default new Router({
  //页面路由方式去掉#号,改为hitory模式
  mode: 'history',
  routes: [
    //默认首页
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    //测试首页 /index
    {
      path: '/index',
      component: index
    },
    // 跳转到/a页面
    {
      path: '/a',
      component: A,
      //注意:跳转到/a1页面的时候,父页面/a的信息也会保留在页面中
      //因为是父子关系,如果不想显示父页面信息,则需要定义与父页面平级组件,比如/b
      children:[
        {
            path:'/a1',
            component:A1
        }
      ]
    },
    // 跳转到 /b页面
    {
      path: '/b',
      component: B
    },
    //商品列表首页 /first
    {
      path: '/first',
      component: First
    }
  ]
})
