<template>
     
         <div id="container2">
        <div id="dh2">
            <a href="">环球</a>
            <div id="dh3">
              <ul>   
                <li @click='up'><a>上一级</a></li>
                <li><a href="">回到顶部</a></li>
                <li v-show="!showlogin" @click='denglu'><a>登录</a></li> 
               <li class="nav-bo" v-show="showlogin==1" @click="tanchaung"><a>welcome! {{uname}}</a></li>
              </ul>
            </div>
        </div>
        
    <div>
    <div class="conan">
    <img  :src="'http://127.0.0.1:3000/'+list.apic" alt="">
    <div class="bt"><h2>{{list.title}}</h2>
    <p>{{list.content}}</p><br>
    <p>{{list.writer}}</p>
    <p>{{list.puttime}}</p><br>
    </div></div></div>
  </div>

</template>
<script>
export default {
  created(){
       this.loadarticle();
     }
    ,data(){
        return{
          list:[],
          sname:this.$route.query.sname,
          aid:this.$route.query.aid,
           aera:this.$route.query.aera,
            showlogin:this.$route.query.showlogin,
             uname:this.$route.query.uname,
        }
    },methods:{
      up(){
        var sname=this.sname;
        var uname=this.uname;
        this.$router.push({path:'/spot',query:{uname:uname,sname:sname,showlogin:1}});
      },
       denglu(){
        var aid=this.aid;
        this.$router.push({path:'/login',query:{aid:aid}});
      },
        tanchaung(){
          var u=this.uname;
          this.$router.push({path:'/userinfo',query:{uname:u}});
          
        },
        loadarticle(){ 
        var  aid=this.aid;
          var obj ={aid:aid};
            var url='showdetail';
           this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code===1){ 
                    var list=res.data.rows; 
                    this.list=list[0];
                    console.log(list.aid);
                }
            })
            .catch(err=>{
                console.log(err)
            })
        },
    }
}
</script>
<style scoped>
 *{
      margin: 0 auto;
      padding: 0;
    }

    .conan{
        width:75%;
        align-items: center;
        margin-top: 20px;
    }

    img{
        position: absolute;
      width: 700px; 
      margin-top: 60px;
      margin-left: 40%;
      z-index: -1;
    }img{
      box-shadow: rgba(77, 173, 152, 0.733)  5px 10px 20px  ;
    }
   .bt{
       margin-top: 100px;
     width: 60%;
     background:#9febf0e0;
     margin: 0;
     z-index: 1;
   }
  h2 {
      margin: 30px;
    color: rgba(177, 109, 133, 0.589);
    padding: 15px;
  }
  p{
      margin: 20px;
    color: rgb(37, 26, 30);
    line-height: 1.5rem;
  }
  li{list-style: none;}
    a{text-decoration:none;}
     #dh2{
         width: 100%;
      height:88px;
      /* color:#f0f0f0; */
      background: url('./../../public/img/bg_2.jpg') no-repeat;
      background-size:100%;
      font-size:16px;
      /* display:none; */
      /* opacity: 0; */
      margin-top:0%;
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      
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
      color:rgb(254, 255, 251);
    }
    #dh2>a{
      width:5%;
      padding-top:1.5%;
      padding-left:15%;
      color:rgb(254, 255, 250);
    }
</style>
