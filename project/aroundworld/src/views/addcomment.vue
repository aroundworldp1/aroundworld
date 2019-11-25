<template><div>
    <div class="dark">
      <div class="call">
        <div class="pic">
          <img style="width:130px;" :src="'http://127.0.0.1:3000/'+uinfo.avatar" alt="">
          <div class="info">
          <p>用户名: {{uname}} </p>
          <p>性别: {{uinfo.gender}} </p>
          <p>邮箱: {{uinfo.email}} </p>
          <p>电话: {{uinfo.phone}} </p>
          <p>注册时间:{{uinfo.birthday}}</p>
        </div>
        </div>
      
   <div class="quit" @click='back'>X</div>
  </div></div></div>
</template>

<script>
export default {
     created(){
       this.loaduser();
       this.loadart();
       this.loadcom();
     },data(){
        return{
          uinfo:[],
          ainfo:[],
          cinfo:[],
          uname:this.$route.query.uname,
        }
    },methods:{
      loaduser(){
        var url='showuser';
        var  u=this.uname;
          var obj ={uname:u};
           this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code===1){ 
                    var uinfo=res.data.rows[0]; 
                    this.uinfo=uinfo;
                    console.log(uinfo);
                    console.log(uinfo.birthday);
                }
            })
            .catch(err=>{
                console.log(err)
            })
      },
      loadart(){
        var url='showart';
        var  u=this.uname;
          var obj ={writer:u};
           this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code===1){ 
                    var ainfo=res.data.rows; 
                    this.ainfo=ainfo;
                    this.ainfo=this.ainfo.concat(res.data.rows);
                    console.log(ainfo);
                    console.log(ainfo[0].title);
                }
            })
            .catch(err=>{
                console.log(err)
            })
      },
      loadcom(){
        var url='showcom';
        var  u=this.uname;
          var obj ={writer:u};
           this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code===1){ 
                    var cinfo=res.data.rows; 
                    this.cinfo=cinfo;
                    this.cinfo=this.cinfo.concat(res.data.rows);
                    console.log(cinfo);
                    console.log(cinfo[0].content);
                }
            })
            .catch(err=>{
                console.log(err)
            })
      },
      back(){
         this.$router.go(-1);
      }
    }
}
</script>
<style scoped>
 *{
      border: 0;
      padding: 0;
      margin: 0;
    }
    .dark{
      width: 100%;
      height: 1000px;
      background-color: rgba(97, 48, 48, 0.116);
    }
    .call{
      position: absolute;
      top:20%;
      left: 24%;
      width: 1000px;
      height: 600px;
      background-color: aliceblue;
      display: flex;
    }
    .pic{
      border: solid  rgba(97, 48, 48, 0.24) 3px;
      width: 37%;
      text-align: center;
    }
    .pic img{
      margin: 15%;
    }
    .pic p{
      font-size: 1.5rem;
      line-height: 3rem;
      color: rgba(22, 39, 116, 0.473);
    }
    .aa{
      padding: 5%;
      padding-top: 10%;
      width: 60%;
      height: 445px;
      border: solid  rgba(97, 48, 48, 0.24) 3px;
    }
    .bb{
      width: 100%;
      
      font-size: 1.2rem;
      color: rgba(133, 87, 27, 0.575);
    }
    .aa ul{
      list-style: none;
      margin-top: 10px;
      display:flex;
    }
    .aa ul a{
     text-decoration: none;
     color: rgba(37, 71, 71, 0.349);
    }
    .cc{
      width: 100%;
      border: solid  rgba(97, 48, 48, 0.24) 3px;
    }
    .quit{
      position: absolute;
      top:5%;
      left:94%;
      font-size: 30px;
      color: rgba(165, 42, 42, 0.39);
    }
</style>