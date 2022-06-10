<template>
    <div class="serachres"  v-for="result in results" v-bind:key="result.order">
        {{result.order}}.<a href={{result.url}}>{{result.caption}}</a>
        <br>
        <br>
        <br>
      </div>
</template>

<script>
    export default{
        data(){
            return{
                page:1,
                results:[
                {order:"1",url:"baidu.com",caption:"百度官网"},
                {order:"2",url:"bilibili.com",caption:"哔哩哔哩官网"},
                {order:"3",url:"bytedance.com",caption:"字节跳动官网"}
                ]
            }
        },
        methods:{

        }
    }
</script>