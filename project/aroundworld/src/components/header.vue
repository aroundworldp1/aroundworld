<template>
    <!--导航条组件-->
    
    <div id="container"> 
    <div id="dhl">
      <a href="">环球</a>
      <div id="dh">
        <ul>
          <li v-show="!showlogin"><a href="http://127.0.0.1:8080/#/login" >登录</a></li> 
          <li class="nav-bo" v-show="showlogin==1" @click="tanchaung"><a>welcome! {{uname}}</a></li>
           <li><a href="">回到顶部</a></li>
            <li @click="back"><a>上一级</a></li>
             <li><a href="">首页</a></li>
   
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
export default {
    data(){
        return{
            showlogin:this.$route.query.showlogin,
             uname:this.$route.query.uname,
        }
    },
    methods:{ 
        tanchaung(){
          var u=this.uname;
          var url='showuser';
          var obj ={uname:u};
          console.log(1);
           this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code===1){ 
                    var info=res.data.rows;
                    this.$router.push({path:'/userinfo',query:{uname:u,info}})
                }else{
                    this.$message("用户名有误");
                    this.$message(res.data.code);
                }
            })
            .catch(err=>{
                console.log(err)
            })
        },back(){
         this.$router.go(-1);
      }
    }  
    
}
</script> 

<style scoped>
    *{margin:0;padding:0}
    li{list-style: none;}
    a{text-decoration:none;}
    #dhl{
      width:100%;
      height:88px;
      /* color:#f0f0f0; */
      font-size:16px;
      opacity: 1 !important;
      /* display: block; */
      position: absolute;
      /* margin-top:0%; */
      display: flex;
      justify-content: space-between;
    }
    #dh{
      width:75%;
    }
    #dh>ul>li{
      float: right;
      margin-right:5%;
      padding-right:5%;
      padding-top:2%;

    }
    #dh>ul>li>a{
      color:#f0f0f0;
    }
    #dhl>a{
      width:5%;
      padding-top:1.5%;
      padding-left:15%;
      color:#ffffff;
    }
    #container>img{
      width:100%;
    }


    /* 导航二 */
    #dh2{
      width:100%;
      height:88px;
      /* color:#f0f0f0; */
      background:#fff;
      font-size:16px;
      /* display:none; */
      /* opacity: 0; */
      display: block;
      position: absolute;
      margin-top:0%;
      display: flex;
      justify-content: space-between;
      z-index:-1;
    }
    #dh3{
      width:75%;
    }
    #dh3>ul>li{
      float: right;
      margin-right:5%;
      padding-right:5%;
      padding-top:2%;

    }
    #dh3>ul>li>a{
      color:#000;
    }
    #dh2>a{
      width:5%;
      padding-top:1.5%;
      padding-left:15%;
      color:#000;
    }
</style>
