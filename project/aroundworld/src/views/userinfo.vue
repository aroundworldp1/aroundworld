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
        <div class="aa">
            <h2 >&nbsp;&nbsp;{{uname}}&nbsp;&nbsp;最近评论</h2>
            <div class="bb"> 
          <ul v-for="( item,i) of cinfo" :key="i">
            <li>{{item.cid}}</li>
            <li>{{item.content}}</li>
            <li>{{item.puttime}}</li>
            <li>&nbsp;&nbsp;<el-button>修改</el-button>&nbsp;<el-button @click="del1(i)">删除</el-button></li>
          </ul>  
      </div> 
      <div class="cc"></div>
      <h2 style="margin-top: 50px;">&nbsp;&nbsp;{{uname}}&nbsp;&nbsp;最近文章</h2>
      <div class="bb"> 
          <ul v-for="(item,i) of ainfo" :key="i">
            <li>{{item.aid}}</li>
            <li>{{item.title}}</li>
            <li>{{item.puttime}}</li>
            <li>&nbsp;&nbsp;<el-button>修改</el-button>&nbsp;<el-button @click="del2(i)">删除</el-button></li>
          </ul>
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
      del1(i){
        var cid=this.cinfo[i].cid;
        var url="delcom";
        var obj={cid:cid};
        this.axios.get(url,{params:obj}).then(res=>{
          if(res.data.code===1){
            this.$message("删除成功")
            this.$router.go(0);
          }else{
            this.$message("删除失败")
          }
        })
        .catch(err=>{
          console.log(err)
        })
      },
      del2(i){
        var aid=this.ainfo[i].aid;
        var url="delart";
        var obj={aid:aid};
        this.axios.get(url,{params:obj}).then(res=>{
          if(res.data.code===1){
            this.$message("删除成功");
            this.$router.go(0);
          }else{
            this.$message("删除失败")
          }
        })
        .catch(err=>{
          console.log(err)
        })
      },
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