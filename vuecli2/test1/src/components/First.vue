<template>
    <!---
        商品列表测试首页组件
        @author: laingxifeng
        @date: 2020-04-09
    -->
    <div class="main">
        <div class="left">
            <!-- 引入Left组件(页面) ,
            <Left>与export default compontent注册的要相同-->
            <Left></left>
        </div>
        <div class="right">
            <div class="top">
                <img src="../assets/title.png" />
            </div>
            <div class="buttom">
                <!-- 引入Right组件(页面) -->
                <Right></Right>
            </div>
        </div>
    </div>
</template>
<style>
    *{
        padding:0;
        margin:0;
     }
    .left {
        width:100px; 
        float:left;
        margin-right:10px;
    }
    .right{
        width:1000px;
        float:left;
        margin-left:10px;
    }
    .main{
        width:1200px;
        margin:20px auto;
    }
    .top img{
        height:200px;
        width:1000px;
    }
    .left,.right{
        background:#f5f5f5;
        height:500px;
    }
</style>
<script type="text/javasscript">
    //引入注册left组件
    import Left from './Left.vue'
    //引入注册right组件
    import Right from './Right.vue'
    export default {
        //注册Left,Right组件
        components:{
            Left,
            Right
        }
    }
</script>
