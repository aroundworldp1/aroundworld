<template>
    <!--导航条组件-->
    
    <div id="container"> 
    <div id="dhl">
      <a href="">环球</a>
      <div id="dh">
        <ul>
          <li v-show="!showlogin" @click='denglu'><a>登录</a></li> 
          <li class="nav-bo" v-show="showlogin==1" @click="tanchaung"><a>welcome! {{uname}}</a></li>
           <li><a >回到顶部</a></li>
            <li @click="back"><a>上一级</a></li>
             <li @click='shou'><a>首页</a></li>
   
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
export default {
    data(){
        return{
            aera:this.$route.query.aera,
            showlogin:this.$route.query.showlogin,
             uname:this.$route.query.uname,
        }
    },
    methods:{ 
      shou(){
        var showlogin=this.showlogin;
        var aera=this.aera;
        var uname=this.uname;
        this.$router.push({path:'/region',query:{aera:aera,uname:uname,showlogin:showlogin}});
      },
      denglu(){
        var aera=this.aera;
        this.$router.push({path:'/login',query:{aera:aera}});
      },
        tanchaung(){
          var u=this.uname;
          this.$router.push({path:'/userinfo',query:{uname:u}});
          
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
