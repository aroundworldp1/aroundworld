<template><div>
    <div class="container">
    <div class="box"  v-for="(item,i) of list" :key="i">
      <div class="kuang">
      <img :src="'http://127.0.0.1:3000/'+item.avatar" alt="">
      <span class="xing">{{item.writer}}</span><br>
      <span class="shijian">{{item.puttime}}</span>
      </div>
        <div class="ping">
      <p>{{item.content}}</p>
      </div>
  </div>
     
  </div></div>
</template>
<script>
export default {
     created(){
       this.loadcomment();
     },
    data(){
        return{
          aid:this.$route.query.aid,
           list:[],
        }
    },
    methods:{ 
        loadcomment(){
           var  articleid=this.aid;
          var obj ={articleid:articleid};
            var url='showartcom';
           this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code===1){ 
                    var list=res.data.rows; 
                    this.list=list;
                    console.log(list[0].cid);
                }
            })
            .catch(err=>{
                console.log(err)
            })
        },
       
    }, watch: {
        
  }
    
}
</script>
  
<style scoped>
 .kuang{
  width: 100%;
  height: 70px;
}
.kuang img{
  width: 70px;
  height: 70px;;
  float: left;
}
span {
  font-size: 18px;
  padding-top: 5px;

}
.kuang span{
  margin: 5px;
  padding: 5px;
}
.ping{
  width: 100%;
  height: 80%;
  padding-top: 15px;
}

.container{
      width:80%;
      margin:20px auto;
      columns: 4;
      column-gap: 40px;
    }
    .container .box{
      width:100%;
      margin:0 0;
      padding:10px 10px 60px;
      background:rgba(205, 236, 248, 0.39);
      overflow: hidden;
      break-inside: avoid;
      
    }
    .container .box:hover{
      
      box-shadow: rgba(77, 173, 152, 0.733)  5px 10px 20px  ;
    }
    
    .container .box p{
      margin: 0;
      padding:10px;
      margin: 10px;
      font-size:16px;
    }
    @media(max-width: 1200px)
    {
      .container{
        columns: 3;
        width:calc(100%-40px);
        box-sizing: border-box;
        padding:20px 20px 20px 0;
      }
    }
    @media(max-width: 768px)
    {
      .container{
        columns: 2;
              }
    }
    @media(max-width: 480px)
    {
      .container{
        columns: 1;
              }
    }
</style>
