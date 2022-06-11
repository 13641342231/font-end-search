<template>
    <div>
        <h2>{{Msg}}</h2>
    </div>
    <div class="engine">
        <p >
            <input type="text" v-model="Query">
            <input type="text" v-model="Page">
            <input type="text" v-model="Limit">
            <button v-on:click="search">搜索一下</button>
        </p>
    </div>
    <div v-for="result in results.data.documents " v-bind:key="result.score">
        <a href={{result.url}}>{{result.text}}</a>
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
                Query:'中国',
              Page:1,
              Limit:10,
                results:{
                  "state": true,
                  "message": "success",
                  "data": {
                    "total": 2,
                    "pageCount": 1,
                    "page": 1,
                    "limit": 100,
                    "documents": [
                      {
                        "id": 0,
                        "text": "",
                        "url": "",
                        "score": 8.42376742943543,
                        "keys": [
                          "",
                        ]
                      },
                    ],
                    "words": [
                      "2002"
                    ]
                  }
                }
            }
        },
        methods:{
            search(){
             requests.post("http://192.168.0.101:5678/api/query?database=default", {
                    query:this.Query,
               limit:this.Limit,
               page:this.Page
                }
             ).then(res =>{
                 // console.log(res)
                this.results=res
               console.log(this.results.data.documents)
               // console.log(this.results)

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
        position: 100;
        background-color: transparent;
        font-size:24px;
    }
    .serachres{
        font-size: 20px;
        text-align: left;
    }
</style>