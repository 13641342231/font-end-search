<template>
    <!-- 组件的结构 -->
    <div class="">
        <h2>{{Msg}}</h2>
    </div>
    <div class="engine">
        <p >
            <input type="text" v-model="Query">
            <button id="button" v-on:click="search">搜索一下</button>
        </p>
        
        <p>
            <input type="checkbox" v-model = 'NeedBlock'>需要结果过滤
            <input type="text" v-model="Block">
        </p>
    </div>
    <div class="serachres">
        <a href="http://">这是一个搜索连接</a>

        <!-- <span></span> -->
    </div>
</template>

<script>
    // 组件交互、数据处理等功能
    export default{
        name:'SearchEngine',
        data(){
            return{
                Msg:"Welcome to go-search!",
                Query:'',
                NeedBlock:'',
                Block:'',
            }
        },
        methods:{
            search(){
                alert("Search test")
                console.log(this.Query)
                console.log(this.Block)
                window.open('https://localhost:8080/query?query='+this.Query+'&block='+this.Block)
            }
            
        }
    }
</script>

<style>
    /* 组件样式 */
    .demo{
        background-color: orange;
    }
    .engine{
        text-align: center;
        width: auto;
        position: 100%;
        background-color: transparent;
        font-size:24px;
    }
    .serachres{

    }
    #button{
    /* float: right; */
    height:'';
    width:10%;
    background-color:#39F;
    border-width: 1px;
    border-style: solid;
    color:#FFF;
    margin:-2px 0 0 -5px;
    padding: 0px;
    }
</style>