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
            <li class='cont'>{{item.content}}</li>
            <li class='cont'>{{item.puttime}}</li>
            <li>&nbsp;&nbsp;<el-button @click="upcom">修改</el-button>&nbsp;<el-button @click="delcom(i)">删除</el-button></li>
          </ul>  
      </div> 
      <div class="cc"></div>
      <h2 style="margin-top: 20px;">&nbsp;&nbsp;{{uname}}&nbsp;&nbsp;最近文章</h2>
      <div class="bb"> 
          <ul v-for="(item,i) of ainfo" :key="i">
            <li>{{item.aid}}</li>
            <li class='cont'>{{item.title}}</li>
            <li class='cont'>{{item.puttime}}</li>
            <li>&nbsp;&nbsp;<el-button>修改</el-button>&nbsp;<el-button @click="delart(i)">删除</el-button></li>
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
      upcom(){
        var uname=this.uname;  
        this.$router.push({path:'/addcomment',query:{uname:uname}})
      },
       delcom(i){
         var cid=this.cinfo[i].cid;
        var url="delcom";
        var obj={cid:cid};
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
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
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      delart(i){
        var aid=this.ainfo[i].aid;
        var url="delart";
        var obj={aid:aid};
         this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
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
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });

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
      width: 60%;
      height: 495px;
      border: solid  rgba(97, 48, 48, 0.24) 3px;
    }
    .bb{
      width: 100%;
      height:200px;
       overflow:hidden; 
      font-size: 1.2rem;
      color: rgba(133, 87, 27, 0.575);
    }
    ul{
      list-style: none;
      margin-top: 10px;
      display:flex;
     flex-direction: row;
      justify-content: center;
    }
    .aa ul a{
     text-decoration: none;
     color: rgba(37, 71, 71, 0.349);
    }
    li{
      list-style: none;
        line-height: 50px;
    }
    .cont{
      width:150px;
      white-space:nowrap; 
      overflow:hidden; 
      text-overflow:ellipsis;
      list-style-position: outside;
      list-style-type: none;
      margin-left:30px;
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