<template>
    <!---
        商品列表左侧导航组件
        @author: laingxifeng
        @date: 2020-04-09
    -->
    <div>
        <div class="title"> 热门推荐 </div>
        <ul class="menu"> 
            <li @click="clickBed">木床</li>
            <li @click="clickDoor">木门</li>
            <li>卫浴</li>
            <li>桌椅</li>
        </ul>
    </div>
</template>
<style>
    .title{
        width:100px;
        color:red;
    }
    .menu li{
        list-style:none;
        height:50px;
        margin-bottom:2px;
        background-color:white;
        line-height:50px;
        cursor:pointer;
    }
</style>
<script type="text/javascript">
    //引入消息总线组件
    import Msg from './msg.js'
    export default {
        methods: {
            //用户点击木床链接触发
           clickBed:function(){
                //使用事件总线的$emit触发onclick事件
                Msg.$emit("val","1")
            } ,
            //用户点击木门链接触发
           clickDoor:function(){
                //使用事件总线的$emit触发onclick事件
                Msg.$emit("val","2")
            } 
        }
    }
</script>
