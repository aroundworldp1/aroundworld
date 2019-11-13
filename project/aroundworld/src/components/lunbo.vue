<template>
    <!--轮播图组件-->
    <div > <!--大图-->
       <div class="call" v-show='lunbotu==1'><img src='./../../public/img/bg_4.jpg' alt=""></div>
        <div class="call" v-show='lunbotu==2'><img src='./../../public/img/bg_2.jpg' alt=""></div>
        <div class="call" v-show='lunbotu==3'><img src='./../../public/img/bg_3.jpg' alt=""></div>
    </div>
</template>
<script>
export default {
    
    data(){
        return{
           lunbotu:3,
        }
    },
    methods:{ 
       
    }  
    
}
</script>

<style scoped>
.call{
    height: 790px;
    width: 100%;
    top:0;
    display:flex;
	align-items:center; 
	justify-content:center;
    animation: fadeIn  ease-in-out 500ms alternate none 1;
    overflow: hidden;
}
.call img{
    width:100%;
	height:auto;

}
</style>
