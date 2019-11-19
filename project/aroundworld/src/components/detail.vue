<template>
     
         <div id="container2">
        <div id="dh2">
            <a href="http://127.0.0.1:8080/#/region">环球</a>
            <div id="dh3">
              <ul>   
                <li><a href="http://127.0.0.1:8080/#/spot">上一级</a></li>
                <li><a href="">回到顶部</a></li>
                <li><a href="http://127.0.0.1:8080/#/login">登录</a></li>
              </ul>
            </div>
        </div>
        
    <div>
    <div class="conan">
    <img  src="img/tour-1.jpg" alt="">
    <div class="bt"><h2>文章详情页面</h2>
    <p>敦煌景点分为东西两线游览，东线主要景点是莫高窟和鸣沙山，都距敦煌市区较近，路程在1-2小时之间。西线长约300km，往返7-8小时，
        苍凉与悲壮之感是敦煌西线旅游的特点，主要景点包括：敦煌古城、西千佛洞、河仓城、玉门关、汉长城遗址、雅丹魔鬼城、阳关。

        莫高窟属全国重点文物保护单位，俗称千佛洞，被誉为20世纪最有价值的文化发现、“东方卢浮宫”，坐落在河西走廊西端的敦煌，
        以精美的壁画和塑像闻名于世。莫高窟由敦煌莫高窟数字展示中心和莫高窟实体洞窟两部分组成。它始建于十六国的前秦时期，
        历经十六国、北朝、隋、唐、五代、西夏、元等历代的兴建，形成巨大的规模，现有洞窟735个，壁画4.5万平方米、泥质彩塑2415尊，
        
        是世界上现存规模最大、内容最丰富的佛教艺术圣地。近代以来又发现了藏经洞，内有5万多件古代文物，由此衍生专门研究藏经洞典籍和敦煌艺术的学科——敦煌学。
        但在近代，莫高窟受到盗窃，文物大量流失，其宝藏遭到严重破坏。1961年，莫高窟被公布为第一批全国重点文物保护单位之一。1987年，莫高窟被列为世界文化遗产
        。是中国四大石窟之一。 前往实体窟之前可在数字展示中心内观赏主题数字电影《千年莫高》和球幕电影《梦幻佛宫》，两部电影分别介绍了莫高窟的千年历史，让观众如临窟内。<br>
        玉门关
        始置于汉武帝开通西域道路、设置河西四郡之时，因西域输入玉石时取道于此而得名。汉时为通往西域各地的门户，
        故址在今甘肃敦煌西北小方盘城。玉门关又称小方盘城，建于公元前111年左右。为丝绸之路通往西域北道的咽喉要隘，
        位于敦煌城西北90公里处戈壁滩中。关城为正方形，黄土垒就高10米、上宽3米、下宽5米的城墙保存完好，东西长24米，
        南北宽26.4米，面积633平方米，西北各开一门。当时玉门关，驼铃悠悠，人喊马嘶，商队络绎，使者往来，一派繁荣景象。
        登上古关，举目远眺，四周沼泽遍布，沟壑纵横，长城蜿蜒，烽燧兀立，胡杨挺拔，泉水碧绿。红柳花红，芦苇摇曳，与古关雄姿交相辉映，
        使人心驰神往，百感交集，怀古之情，油然而生。<br>
        阳关
        “渭城朝雨浥轻尘，客舍青青柳色新。劝君更尽一杯酒，西出阳关无故人。”唐代诗人王维的《送元二使安西》赋予了交通咽喉要地阳关凄怆的离愁感。
        
        作为丝绸之路南路必经的关隘，位于敦煌市西南古董滩附近的阳关是汉代对通西域的重要门户，如今的遗址只是一个小土台。在阳关博物馆里，
        兵器与农具的展示向我们展示了当时将士驻守边疆的情景，远离家乡的他们在出征时往往是九死一生、马革裹尸。
        开放时间：08:00-20:00 <br></p><br>
    </div></div></div>
  </div>

</template>
<script>
export default {
    
}
</script>
<style scoped>
 *{
      margin: 0 auto;
      padding: 0;
    }

    .conan{
        width:75%;
        align-items: center;
        margin-top: 20px;
    }

    img{
        position: absolute;
      width: 700px; 
      margin-top: 60px;
      margin-left: 40%;
      z-index: -1;
    }img{
      box-shadow: rgba(77, 173, 152, 0.733)  5px 10px 20px  ;
    }
   .bt{
       margin-top: 100px;
     width: 60%;
     background:#9febf0e0;
     margin: 0;
     z-index: 1;
   }
  h2 {
      margin: 30px;
    color: rgba(177, 109, 133, 0.589);
    padding: 15px;
  }
  p{
      margin: 20px;
    color: rgb(37, 26, 30);
    line-height: 1.5rem;
  }
  li{list-style: none;}
    a{text-decoration:none;}
     #dh2{
         width: 100%;
      height:88px;
      /* color:#f0f0f0; */
      background: url('./../../public/img/bg_2.jpg') no-repeat;
      background-size:100%;
      font-size:16px;
      /* display:none; */
      /* opacity: 0; */
      margin-top:0%;
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      
    }
    #dh3{
      width:75%;
    }
    #dh3>ul>li{
      float: right;
      margin-right:5%;
      padding-right:5%;
      padding-top:2%;

    }
    #dh3>ul>li>a{
      color:rgb(254, 255, 251);
    }
    #dh2>a{
      width:5%;
      padding-top:1.5%;
      padding-left:15%;
      color:rgb(254, 255, 250);
    }
</style>
