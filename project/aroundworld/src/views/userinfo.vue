<template><div>
    <div class="dark">
      <div class="call">
        <div class="pic">
          <img style="width:90px;height:70px" src="img/02.jpeg" alt="">
          <div class="info">
          <p>用户名: {{uname}} </p>
          <p>注册时间:{{userb}}</p>
        </div>
        </div>
        <div class="aa">
            <h2 >&nbsp;&nbsp;最近评论</h2>
            <div class="bb"> 
          <ul style="width: 55%">
           <li>xxxxxxxxxxx</li>
           <li>xxxxxxxxxxxx</li>
           <li>xxxxxxxxxxx</li>
           <li style="margin: 15px;"><a href="">上一页</a></li>
         </ul>
          <ul>
            <li>1199-2-2&nbsp;&nbsp;<a href="">修改</a>&nbsp;<a href="">删除</a></li>
            <li>1199-2-2&nbsp;&nbsp;<a href="">修改</a>&nbsp;<a href="">删除</a></li>
            <li>1199-2-2&nbsp;&nbsp;<a href="">修改</a>&nbsp;<a href="">删除</a></li>
            <li style="margin-left: 50px;margin-top: 15px;"><a href="">下一页</a></li>
          </ul>
      </div> 
      <div class="cc"></div>
      <h2 style="margin-top: 50px;">&nbsp;&nbsp;最近文章</h2>
      <div class="bb"> 
          <ul style="width: 55%;margin-top: 15px;">
           <li>xxxxxxxxxxx</li>
           <li>xxxxxxxxxxxx</li>
           <li>xxxxxxxxxxx</li>
           <li style="margin: 15px;"><a href="">上一页</a></li>
         </ul>
          <ul>
            <li>1199-2-2 &nbsp;&nbsp;<a href="">修改</a>&nbsp;<a href="">删除</a></li>
            <li>1199-2-2&nbsp;&nbsp;<a href="">修改</a>&nbsp;<a href="">删除</a></li>
            <li>1199-2-2&nbsp;&nbsp;<a href="">修改</a>&nbsp;<a href="">删除</a></li>
            <li style="margin-left: 50px;margin-top: 15px;"><a href="">下一页</a></li>
          </ul>
      </div> 
    </div>
   <div class="quit" @click='back'>X</div>
  </div></div></div>
</template>

<script>
export default {
  create(){
    var info=this.$route.query.info;
            var userb=info[0].birthday;
  },
     data(){
        return{
             uname:this.$route.query.uname,
             
        }
    },methods:{
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
      top:30%;
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
      display: flex;
      font-size: 1.2rem;
      color: rgba(133, 87, 27, 0.575);
    }
    .aa ul{
      list-style: none;
      margin-top: 10px;
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