<template>
    <!--导航条组件-->
    <div id="container"> 
    <div id="dhl">
      <a href="">环球</a>
      <div id="dh">
        <ul>
          <li><a href="">我去恶趣味</a></li>
          <li><a href="">4564</a></li>
          <li><a href="">7897987</a></li>
          <li><a href="">sdasd</a></li>
        </ul>
      </div>
    </div>

    <div id="container2">
        <div id="dh2">
            <a href="">环球</a>
            <div id="dh3">
              <ul>
                <li><a href="">我去恶趣味</a></li>
                <li><a href="">4564</a></li>
                <li><a href="">7897987</a></li>
                <li><a href="">sdasd</a></li>
              </ul>
            </div>
          </div>
        </div>

    
  </div>
</template>

<style scoped>
    *{margin:0;padding:0}
    li{list-style: none;}
    a{text-decoration:none;}
    #dhl{
      width:100%;
      height:88px;
      /* color:#f0f0f0; */
      font-size:16px;
      opacity: 1 !important;
      /* display: block; */
      position: absolute;
      /* margin-top:0%; */
      display: flex;
      justify-content: space-between;
    }
    #dh{
      width:75%;
    }
    #dh>ul>li{
      float: right;
      margin-right:5%;
      padding-right:5%;
      padding-top:2%;

    }
    #dh>ul>li>a{
      color:#f0f0f0;
    }
    #dhl>a{
      width:5%;
      padding-top:1.5%;
      padding-left:15%;
      color:#ffffff;
    }
    #container>img{
      width:100%;
    }


    /* 导航二 */
    #dh2{
      width:100%;
      height:88px;
      /* color:#f0f0f0; */
      background:#fff;
      font-size:16px;
      /* display:none; */
      /* opacity: 0; */
      display: block;
      position: absolute;
      margin-top:0%;
      display: flex;
      justify-content: space-between;
      z-index:-1;
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
      color:#000;
    }
    #dh2>a{
      width:5%;
      padding-top:1.5%;
      padding-left:15%;
      color:#000;
    }
</style>
