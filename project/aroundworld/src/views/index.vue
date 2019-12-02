<template>
    <div class='background'>   
       <img style="width:1800px;height:900px;" :src="'http://127.0.0.1:3000/世界.png'" alt="" >
       <div class='dizhonghai' @mouseenter="changed(0)" @mouseleave="changed(1)" @click='next(1)'>△
            <img style='width:100%;' v-if="d==0" :src="'http://127.0.0.1:3000/'+list[0].rpic" alt="">
       </div>
      <div class='zhongguo' @mouseenter="changec(0)" @mouseleave="changec(1)" @click='next(2)'>△
           <img style='width:100%;' v-if="c==0" :src="'http://127.0.0.1:3000/'+list[1].rpic" alt="">
      </div> 
      <div class='balidao'  @mouseenter="changeb(0)" @mouseleave="changeb(1)" @click='next(3)'>△
           <img style='width:100%;' v-if="b==0" :src="'http://127.0.0.1:3000/'+list[2].rpic" alt="">
       </div>
        <div class='riben' @mouseenter="changef(0)" @mouseleave="changef(1)" @click='next(4)'>△
           <img style='width:100%;' v-if="f==0" :src="'http://127.0.0.1:3000/'+list[3].rpic" alt="">
       </div>
       <div class='aiji' @mouseenter="changea(0)" @mouseleave="changea(1)" @click='next(5)'>△
           <img style='width:100%;' v-if="a==0" :src="'http://127.0.0.1:3000/'+list[4].rpic" alt="">
       </div>
       <div class='meiguo' @mouseenter="changem(0)" @mouseleave="changem(1)" @click='next(6)'>△
           <img style='width:100%;' v-if="m==0" :src="'http://127.0.0.1:3000/'+list[5].rpic" alt="">
       </div>
       <div class='baxi' @mouseenter="changex(0)" @mouseleave="changex(1)" @click='next(7)'>△
           <img style='width:100%;' v-if="x==0" :src="'http://127.0.0.1:3000/'+list[6].rpic" alt="">
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
           a:1,
           m:1,
           x:1,
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
    },changea(i){
            var a=this.a;a=i;this.a=a;
    },changem(i){
            var m=this.m;m=i;this.m=m;
    },changex(i){
            var x=this.x;x=i;this.x=x;
    },

    next(i){
        if(i==2){
             var aera='中国';
        }else if(i==4){
            var aera='日本';
        }else if(i==3){
            var aera='巴厘岛';
        }else if(i==1){
            var aera='地中海';
        }else if(i==5){
            var aera='埃及';
        }else if(i==6){
            var aera='美国';
        }else if(i==7){
            var aera='巴西';
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
    .zhongguo{
        color:red;
        width:80px;
        height:80px;
        position:absolute;
        top:330px;
        left:1200px;
    }
    .riben{
        color:red;
        width:80px;
        height:80px;
        position:absolute;
        top:400px;
        left:1370px;
    }
    .balidao{
        color:red;
        width:120px;
        height:80px;
        position:absolute;
        top:500px;
        left:1290px;
    }
    .dizhonghai{
        color:red;
        width:120px;
        height:80px;
        position:absolute;
        top:250px;
        left:1000px;
    }
    .aiji{
        color:red;
        width:120px;
        height:80px;
        position:absolute;
        top:470px;
        left:930px;
    }
    .meiguo{
        color:red;
        width:120px;
        height:80px;
        position:absolute;
        top:330px;
        left:500px;
    }
    .baxi{
        color:red;
        width:120px;
        height:80px;
        position:absolute;
        top:600px;
        left:670px;
    }
</style>
