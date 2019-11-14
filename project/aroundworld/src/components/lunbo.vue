<template>
    <!--轮播图组件-->
    <div class="dark"> <!--大图-->
       <div class="call" v-show='lunbotu==1'><img src='./../../public/img/bg_4.jpg' alt=""></div>
        <div class="call" v-show='lunbotu==2'><img src='./../../public/img/bg_2.jpg' alt=""></div>
        <div class="call" v-show='lunbotu==3'><img src='./../../public/img/bg_3.jpg' alt=""></div>
        <div class="regioninfo" v-show="lunbotu==1">
            <p class="p1">埃及--沙姆沙伊赫</p>
            <p class="p2">位于西奈半岛南端亚喀巴湾 (Gulf of Aqaba) 地区，
                距离苏伊士约 300 公里，距离穆罕默德国家公园仅 19 公里。
                濒临红海亚喀巴湾，常年阳光充足。全年气候干爽舒适，冬季气温在 20 至 25°C 之间，
                夏季气温则会上升到 30 至 35°C。</p>
        </div>
        <div class="regioninfo" v-show="lunbotu==2">
            <p class="p1">埃及--伊斯梅利亚</p>
            <p class="p2">该市拥有苏伊士运河沿岸三大港口
                （从北往南依次为塞得港、伊斯梅利亚港、苏伊士港，被称为“运河三城”、“运河三姐妹”。）之一，
                是依靠运河的水浇灌出来的花园城市，到处分布着椰枣树、草地和花园，
                有很多旅馆和酒店，市容干净整洁，环境安静优美，被誉为“埃及最美的城市”、“运河的新娘”。</p>
        </div>
        <div class="regioninfo" v-show="lunbotu==3">
            <p class="p1">埃及--阿斯旺</p>
            <p class="p2">埃及文化古城，阿斯旺省首府，是埃及南方的一个重要城市。
                位于首都开罗以南900公里的尼罗河东岸，是埃及的南大门，
                是黑非洲的门户和唯一一条由海上进入非洲腹地的通道。</p>
        </div>
        <div class="switch">
            <ul>
                <li><div class="ses" @mouseenter="enter(1)"><div class="sess"></div></div></li>
                <li><div class="ses" @mouseenter="enter(2)"><div class="sess"></div></div></li>
                <li><div class="ses" @mouseenter="enter(3)"><div class="sess"></div></div></li> 
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
    data(){
        return{
           lunbotu:1,
        }
    },
    methods:{ 
       enter(i){
           this.lunbotu=i;
       }
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
.call{position: absolute;
    z-index: -1;
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
