<template>
    <div>   
       <detail></detail>
        <h2>文章评论</h2>
        <div class='aa'><tanchu v-show='on==0'></tanchu>
            <div class='plus' @click='addcomment()'><img src="http://127.0.0.1:3000/plus2.png" ></div>
        <pubu2></pubu2></div>
        <my-footer></my-footer>
    </div>
</template>
<script>
export default {
    data(){
        return{
            sname:this.$route.query.sname,
             aera:this.$route.query.aera,
            showlogin:this.$route.query.showlogin,
             uname:this.$route.query.uname,
             on:1,
        }
    },methods:{
        addcomment(){
             var sname=this.sname;
             var showlogin=this.showlogin;
             var uname=this.uname;
             var on=this.on;
             if (showlogin==1) {
                 this.$router.push({path:'/addcomment',query:{sname:sname,uname:uname}});
             }else{
                  this.on=0;
             }
        },
    }
}
</script>

<style scoped>

 h2{
     font-size: 30px;
     text-align: center;
    padding-top:170px;
   }
    .aa{
       width:100%;
       position:relative;
   }
   .plus{
       position:absolute;
       top:80%;
       left:90%;
   }
   .plus img{
       width:100px;
   }
   .aa .plus :hover{
       animation: fadeIn 1.5s;
   }
   @keyframes fadeIn {
    0% { opacity: 0.5; /*初始状态 透明度为0*/ }
    50% { opacity: 0.7; /*中间状态 透明度为0*/ }
    100% { opacity: 1; /*结尾状态 透明度为1*/}
}
</style>
