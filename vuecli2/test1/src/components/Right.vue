<template>
    <!---
        商品列表右侧下方组件
        @author: liangxifeng
        @date: 2020-04-19
    -->
    <div class="main">
        <!--{{menuType}}-->
        <div v-if="(menuType==1) || (menuType==0)">
            <goodsList :goodId="1"></goodsList>
        </div>
        <div v-else-if="menuType==2">
            <goodsList :goodId="2"></goodsList>
        </div>
    </div>
</template>
<script type="text/javascript">
    //引入消息总线组件
    import Msg from './msg.js'
    //引入商品列表组件
    import goodsList from './GoodsList.vue'
    export default {
        data(){
            return {
                menuType:0
            }
        },
        mounted:function(){
            //将当前this(该vue文件作用域)复制给_this
            var _this=this;
            //使用事件总线`msg`接收`on`事件传递过来的值`val`
            //然后传递给回调函数中参数 `m`
            Msg.$on('val',function(m){
                //这里不用使用this关键字,因为this在此处代表的作用域是$on时间内部
                //并不是vue文件,所以要使用副本_this
               _this.menuType=m; 
            })
        },
        components:{
            goodsList
        }
    }
</script>
