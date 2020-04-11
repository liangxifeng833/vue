<template>
    <!---
        公共的商品列表组件
        @author: liangxifeng
        @date: 2020-04-09
    -->
    <div name=show>
        <ul class="goodsList"> 
            <li v-for="good in list">
                <img v-bind:src="good.img" />
                <p>{{good.goodNamd}}</p>
            </li>
        </ul>
    </div>
</template>
<style>
    .goodsList li{
        width:200px;
        height:200px;
        list-style:none;
        float:left;
        margin-bottom:30px;
        font-size:10px;
        color:red;
    }
    .goodsList img{
        width:180px;
        height:180px;
    }
</style>
<script type="text/javascript">
    export default{
        name:"show",
        data(){
            var _this = this;
            //模拟ajax请求服务器获取商品列表
            //$http是在main.js中定义的vue全局属性axios
            //get属于事件,在事件中使用this就属于事件本身了,不属于vue文件
            var url = "";
            if(_this.goodId == 1){
                url = "../static/json/bed.json";
            }else if(_this.goodId == 2) {
                url = "../static/json/door.json";
            }
            this.$http.get(url).then(function(res){
                //res.data中的data是关键字,获取res中的数据即后台返回的商品列表json
                //list已经在上面v-for循环中定义
                _this.list=res.data;
            })
            //返回数组格式
            return{
                list:[]
            }
        },
        //使用props接收来自父组件传递进来的参数
        //父组件Right.vue调用本组件并传参goodId:<goodsList :goodId="1"></goodsList>
        props:{
            //接收到的参数类型为Number
            goodId:Number
        },
        watch:{
            //监听参数goodId值的变化
            goodId(){
                var _this = this;
                var url = "";
                if(_this.goodId == 1){
                    url = "../static/json/bed.json";
                }else if(_this.goodId == 2) {
                    url = "../static/json/door.json";
                }
                _this.$http.get(url).then(function(res){
                    //res.data中的data是关键字,获取res中的数据即后台返回的商品列表json
                    //list已经在上面v-for循环中定义
                    _this.list=res.data;
                })
                //返回数组格式
                return{
                    list:[]
                }
            }
        }
    }
</script>
