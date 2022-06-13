<template>
    <div>
        <h2>{{Msg}}</h2>
    </div>
    <div class="engine">
        <p >
            <input type="text" v-model="Query" style="width: 600px;height: 20px;font-size: medium;margin: auto;">
            <button v-on:click="search">搜索一下</button>
        </p>
    </div>
    <div class="searchRes" >
        <div v-for="result in sortResults" :key="result">
            <a :href="result.url" v-html="result.text"></a>
        </div>
        <div class="relatedsearch">
        <h3>相关搜索</h3>
        <div v-for="result in relatedsearchResults.slice(0, 10)" :key="result">
            <a v-on:click ="newsearch(result)" value="{{result}}"> {{result}}</a>
        </div>
    </div>
    </div>



    <p>
        页数<input class="page" min="1" type="number" v-model="Page">
        最大显示数量<input class="page" max="100" type="number" v-model="Limit">
    </p>
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
                    ],
                    "relatedsearch": ["中国国旗","中国旅游景点"]
                  }
                }
            }
        },
      computed:{
        sortResults:function(){
          return this.sortByKey(this.results.data.documents,'score','id');
          //this.modules是原数组
        },
        relatedsearchResults:function(){
          return this.results.data.relatedsearch;
        }
      },
        methods:{
          
            search(){
                // "http://192.168.1.167:5678/api/query?database=default"
             requests.post("http://127.0.0.1:5678/api/query?database=default", {
                    query:this.Query,
                    limit:this.Limit,
                    page:this.Page,
                    highlight:{
                        preTag:"<mark>",
                        postTag:"</mark>",
                    }
                }
             ).then(res =>{
                 console.log(res.data.documents)
                this.results=res
            //    console.log(this.results.data.documents)
               // console.log(this.results)
             }).catch(error=>{
                 console.log(error)
             })
            },

            //直接拷贝这个方法
            sortByKey(array, score, id) {
              return array.sort(function(a, b) {
                var x = a[score];
                var y = b[score];
                if(x != y){
                  return x < y ? 1 : x > y ? -1 : 0;
                }else{
                  x = a[id];
                  y = b[id];
                  return x < y ? -1 : x > y ? 1 : 0;
                }
              });
            },
            newsearch(result){
              // console.log(result)
              this.Query = result
                // "http://192.168.1.167:5678/api/query?database=default"
             requests.post("http://127.0.0.1:5678/api/query?database=default", {
                    query:this.Query,
                    limit:this.Limit,
                    page:this.Page,
                    highlight:{
                        preTag:"<mark>",
                        postTag:"</mark>",
                    }
                }
             ).then(res =>{
                 console.log(res.data.documents)
                this.results=res
            //    console.log(this.results.data.documents)
               // console.log(this.results)
             }).catch(error=>{
                 console.log(error)
             })
            

            }
          },
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
    .searchRes{
        font-size: 16px;
        text-align: center;
        height: 500px;
    }
    .page{
        text-align: center;
        position: relative;
        width: 30px;
        height: 10px;
        
    }
    .relatedsearch{
        color:aliceblue;
        text-align: center;
        /* position: relative; */
        /* width: 300px; */
        /* height: 200px; */

    }
</style>