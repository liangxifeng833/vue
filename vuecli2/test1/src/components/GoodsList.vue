<template>
    <!---
        公共的商品列表组件
        @author: liangxifeng
        @date: 2020-04-09
    -->
    <div name=show>
        <ul> 
            <li v-for="good in list">
                <img v-bind:src="good.img">
                <p>{{good.goodName}}</p>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    export default{
        name:"show",
        data(){
            var obj = this;
        }
    }
</script>
