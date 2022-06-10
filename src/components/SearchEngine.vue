<template>
    <div>
        <h2>{{Msg}}</h2>
    </div>
    <div class="engine">
        <p >
            <input type="text" v-model="Query">
            <button v-on:click="search">搜索一下</button>
        </p>
    </div>
    <div v-for="result in results" v-bind:key="result.order">
        <a href={{result.url}}>{{result.caption}}</a> 
    </div>

</template>

<script>
    import requests from "../assets/requests"
    // import axios from "axios"
    // 组件交互、数据处理等功能
    export default{
        name:'SearchEngine',
        data(){
            return{
                Msg:"Welcome to go-search!",
                Query:'',
                results:[
                {order:"1",url:"baidu.com",caption:"搜索结果一"},
                {order:"2",url:"bilibili.com",caption:"搜索结果二"},
                {order:"3",url:"bytedance.com",caption:"搜索结果三"}
                ]
            }
        },
        methods:{
            search(){
             requests.post("http://127.0.0.1:5678/api/query?database=default", {
                    query:this.Query
                }
             ).then(res =>{
                 console.log(res)
             }).catch(error=>{
                 console.log(error)
             })
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
        font-size: 20;
        text-align: left;
    }
</style>