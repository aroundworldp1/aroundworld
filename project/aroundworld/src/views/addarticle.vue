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
        <div class='cc'><h3>添加文章</h3>
        标题:<el-input v-model="title" placeholder="请输入标题"></el-input><br>
        图片路径:<el-input v-model="apic" placeholder="请输入图片的服务器路径"></el-input>
        文本:<el-input type="textarea" rows='10' v-model="content" placeholder="请输入文本"></el-input>
        <el-button @click="insert">发表</el-button>
        </div>
   <div class="quit" @click='back'>X</div>
  </div></div></div>
</template>

<script>
export default {
     created(){
       this.loaduser();
     },data(){
        return{
          uinfo:[],
          uname:this.$route.query.uname,
          sname:this.$route.query.sname,
          title:'',
          apic:'',
          content:'',
          puttime:'',
        }
    },methods:{
      insert(){
        var url='insertart';
        var uname=this.uname;
        var sname=this.sname;
        var title=this.title;
        var apic=this.apic;
        var content=this.content;
        var puttime=this.puttime;
        var obj ={uname:uname,sname:sname,title:title,apic:apic,content:content,puttime:puttime};
        this.axios.get(url,{params:obj}).then(res=>{
          if(res.data.code===1){
             this.$router.push({path:'/spot',query:{sname:sname,uname:uname,showlogin:1}});
          }
        }).catch(err=>{
           console.log(err)
        })
      },
      loaduser(){
        var url='showuser';
        var u=this.uname;
          var obj ={uname:u};
           this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code===1){ 
                    var uinfo=res.data.rows[0]; 
                    this.uinfo=uinfo;
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
      width: 40%;
    height: 50%;
    background-color: aliceblue;
    margin-top:30px;
    margin-left:70px;
    }
    .quit{
      position: absolute;
      top:5%;
      left:94%;
      font-size: 30px;
      color: rgba(165, 42, 42, 0.39);
    }
</style>