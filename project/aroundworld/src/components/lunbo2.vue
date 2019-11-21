<template>
    <!--轮播图组件-->
    <div class="dark"> <!--大图-->
       <div class="call"><img :src="'http://127.0.0.1:3000/'+list.spic" alt=""></div>
        <div class="regioninfo">
            <p class="p1">{{list.sname}}</p>
            <p class="p2">{{list.info}}</p>
        </div>
    </div>
</template>
<script>
export default {
     created(){
       this.loadspot();
     },
    data(){
        return{
           sname:this.$route.query.sname,
           list:[],
        }
    },
    methods:{ 
        loadspot(){
            var  sname=this.sname;
          var obj ={sname:sname};
            var url='showspotdetail';
           this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code===1){ 
                    var list=res.data.rows; 
                    this.list=list[0];
                    console.log(list);
                }
            })
            .catch(err=>{
                console.log(err)
            })
        },
       enter(i){
           this.lunbotu=i;
       }
    }, watch: {
        
  }
    
}
</script>

<style scoped>
.switch{
    position: absolute;
    margin-top: 5%;
    margin-left: 35%;
    width: 30%;
}
.switch ul{
    display: flex;
    justify-content: center;
    list-style: none;
}

.switch ul li .ses{
    margin-left: 10px;
    width: 150px;
    height: 35px;  
}
.switch ul li .ses .sess{
    width: 100%;
    height: 5px;
    background-color: rgba(240, 248, 255, 0.336);
}
.switch ul li  .ses:hover .sess{
    background-color: rgba(240, 248, 255, 0.801);
}
.dark{
    
    width: 100%;
    height: 790px;
    background-color: rgba(0, 0, 0, 0.39);
}
.dark .regioninfo{
    position: relative;
    width: 50%;
    height: 50%;
     padding-top: 10%;
     left: 8%;right: 10%;
     animation: go_out 0.5s;
}
.dark .p1{
    margin: 0;
    position: relative;
    color: rgba(248, 247, 202, 0.63);
    font-size: 60px;
    padding-left: 10%;
}
.dark .p2{
    text-indent:2em;
    margin-top: 5%;
    position: relative;
    color: rgba(252, 253, 255, 0.63);
    font-size: 30px;
    line-height: 1.6em;
}
.call{
    position: absolute;
    z-index: -1;
    height: 790px;
    width: 100%;
    top:0;
    display:flex;
	align-items:center; 
	justify-content:center;
    animation: prokkk 1;
    overflow: hidden;
}
.call img{
    width:100%;
	height:auto;
    animation: prokkk 1s;
}
 @keyframes go_in
  {
     0% {opacity: 0.5; transform: scale(0.9);}
     100%{opacity: 1; transform: scale(1);}
  }
  @keyframes go_out
  {
     0% {opacity: 0.5; transform: scale(0.5);}
     
     100%{opacity: 1; transform: scale(1);}

  }
  @keyframes prokkk { 
    0%{transform:perspective(1000px) rotateY(1deg);} 
    50%{transform:perspective(1000px) rotateY(-1deg);} 
    100%{transform:perspective(1000px) rotateY(0deg);} 
}
</style>
