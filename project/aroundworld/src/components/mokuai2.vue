<template>
    <div class="sex" style="background-color:rgba(240, 248, 255, 0.336)">
    <div class="fg" >
    <div class="ghi">
      <div class="gtu"  v-for="(item,i) of list" :key="i"> 
        <img :src="'http://127.0.0.1:3000/'+item.apic" @click="next(i)">
      <div class="gtn">
          <h3>{{item.title}}</h3>
         <span class="text">{{item.writer}}</span>  
          <p>
            <span class="start"></span>
            <span class="txt">{{item.puttime}}</span>
          </p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
     created(){
       this.loadarticle();
     },
    data(){
        return{
           sname:this.$route.query.sname,
            showlogin:this.$route.query.showlogin,
             uname:this.$route.query.uname,
           list:[],
        }
    },
    methods:{ 
      next(i){
        var sname=this.sname;
        var showlogin=this.showlogin;
        var uname=this.uname;
        var aid=this.list[i].aid;
       this.$router.push({path:'/article',query:{aid:aid,showlogin:showlogin,uname:uname,sname:sname}});
      },
        loadarticle(){
          var  spot=this.sname;
          var obj ={spot:spot};
            var url='showspotart';
           this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code===1){ 
                    var list=res.data.rows; 
                    this.list=list;
                    console.log(list[0]);
                }
            })
            .catch(err=>{
                console.log(err)
            })
        },
       
    }, watch: {
        
  }
    
}
</script>

<style scoped>
  *{
    margin:0 auto;padding: 0;
  }
   .sex{
     width:100%;
   }
   .fg{
     width: 100%;
   }
   .cf{width: 100%;
   height:400px;
   display: flex;
   text-align: center;
   align-items: center;
   align-content: center;
   justify-content: center;
    }

   .gtu img{
     width:415.75px;
     height: 400px;
   }
   .gtu{
     width: 415.75px;
     height: 400px;
      animation: proRotate 1.5s;
      display:flex;

   }
  .gtu::after{
    opacity: 0.5;
  }

   .gtu{
    position: relative;
   }
  .gtu>.gtn{
   width: 375.75px;
   height: 162px;
   position:absolute; 
  z-index:2;
  left:0;
  bottom:0;
  padding-left :20px;
  padding-right: 20px;
  padding-top: 10px;
   }
   .gtn{
     text-align: left;
     margin:10px;
   }
   .gtu:hover img{
     animation: prokkk 1.5s;
   }
   .gtu:hover .gtn{
     background-color:#ffffff;
     animation: go_out 1.5s;
   }
   .gtu:hover .price{
     color: #000000;
   }
  .gtu:hover h3{
    color: #000000;
  }

   .gtu:hover .text{
     color:#000000;
   }
   .gtu:hover .text{
     color: #9e9e9eb5;
   }
   .gtu:hover .txt{
     color:#9e9e9eb5;
   }
   .price{
     font-size: 16px;
     color: #ffffff;
   }
   h3{
     font-size:24px;
     color: #ffffff;
     margin: 0px 0px 10px;
   }
   .text{
    font-size:14px;
     color: #ffffff;
     margin: 0px 10px 10px 0px;
   }
   .txt{ font-size: 12px;
     color: #ffffff;
     }
     .p{
       margin: 0px 0px 16px;
     }
   .ghi{
    width:87.4%;
     display: flex;
     flex-wrap:wrap;
   text-align: center;
   align-items: center;
   align-content: center;
   }
@keyframes proRotate { 
    0%{transform:perspective(1800px) rotateY(180deg);} 
    100%{transform:perspective(1800px) rotateY(0deg);} 
}
@keyframes prokkk { 
    0%{transform:perspective(1000px) rotateY(15deg);} 
    50%{transform:perspective(1000px) rotateY(-15deg);} 
    100%{transform:perspective(1000px) rotateY(0deg);} 
}
@keyframes fadeIn {
    0% { opacity: 0.7; /*初始状态 透明度为0*/ }
    50% { opacity: 0.9; /*中间状态 透明度为0*/ }
    100% { opacity: 1; /*结尾状态 透明度为1*/}
}
@keyframes go_in
  {
     0% {opacity: 0.5; transform: scale(0.9);}
     100%{opacity: 1; transform: scale(1);}
  }
  @keyframes go_out
  {
     0% {opacity: 0.9; transform: scale(0.9);}
     
     100%{opacity: 1; transform: scale(1);}

  }
</style>

