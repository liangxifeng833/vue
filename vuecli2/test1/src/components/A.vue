<template>
    <div>
        <p>我是A页面</p>
        <p><router-link to="/index">返回测试首页</router-link></p>
        <p><router-link to="/a1">转向A1</router-link></p>
        <!-- 挂载路由,让A.vue有转向功能,可以识别到子路由里面去 -->
        <router-view></router-view>
    </div>
</template>
