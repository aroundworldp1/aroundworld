<template>
    <div class='background'>   
       <img style="width:1800px;height:900px;" :src="'http://127.0.0.1:3000/世界.png'" alt="" >
       <div class='sanxia' @mouseenter="changec(0)" @mouseleave="changec(1)" @click='next(2)'>△
           <img style='width:100%;' v-if="c==0" :src="'http://127.0.0.1:3000/'+list[1].rpic" alt="">
           </div>
       <div class='fushishan' @mouseenter="changef(0)" @mouseleave="changef(1)" @click='next(4)'>△
           <img style='width:100%;' v-if="f==0" :src="'http://127.0.0.1:3000/'+list[3].rpic" alt="">
       </div>
       <div class='balidao'  @mouseenter="changeb(0)" @mouseleave="changeb(1)" @click='next(3)'>△
           <img style='width:100%;' v-if="b==0" :src="'http://127.0.0.1:3000/'+list[2].rpic" alt="">
       </div>
       <div class='dizhonghai' @mouseenter="changed(0)" @mouseleave="changed(1)" @click='next(1)'>△
            <img style='width:100%;' v-if="d==0" :src="'http://127.0.0.1:3000/'+list[0].rpic" alt="">
       </div>
    </div>
</template>
<script>
export default {
     created(){
       this.loadregion();
     },
    data(){
        return{
           list:[],
           c:1,
           f:1,
           b:1,
           d:1,
            showlogin:this.$route.query.showlogin,
             uname:this.$route.query.uname,
        }
    },
    methods:{ 
        changec(i){
            var c=this.c;c=i;this.c=c;
    }, changef(i){
            var f=this.f;f=i;this.f=f;
    }, changeb(i){
            var b=this.b;b=i;this.b=b;
    },changed(i){
            var d=this.d;d=i;this.d=d;
    },
    next(i){
        if(i==2){
             var aera='三峡';
        }else if(i==4){
            var aera='富士山';
        }else if(i==3){
            var aera='巴厘岛';
        }else if(i==1){
            var aera='地中海';
        }else{
            var aera='';
        }    
            var uname=this.uname;
        var showlogin=this.showlogin;
            console.log(aera);
            this.$router.push({path:'/region',query:{aera:aera,uname:uname,showlogin:showlogin}});
        },
        loadregion(){
            var url='showregion';
           this.axios.get(url).then(res=>{
                if(res.data.code===1){ 
                    var list=res.data.rows; 
                    this.list=list;
                    console.log(list);
                }
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>
    .background{
        width:100%;
        background-color: #f0f0f0;
    }
    .sanxia{
        color:red;
        width:80px;
        height:80px;
        position:absolute;
        top:300px;
        left:1200px;
    }
    .fushishan{
        color:red;
        width:80px;
        height:80px;
        position:absolute;
        top:330px;
        left:1350px;
    }
    .balidao{
        color:red;
        width:120px;
        height:80px;
        position:absolute;
        top:500px;
        left:1250px;
    }
    .dizhonghai{
        color:red;
        width:120px;
        height:80px;
        position:absolute;
        top:250px;
        left:1000px;
    }
</style>
