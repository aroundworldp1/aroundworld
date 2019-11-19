<template>
    <div class="sex" style="background-color:rgba(240, 248, 255, 0.336)">
    <div class="fg">
    <div class="ghi">
      <div class="gtu">
        <img src="./../../public/img/tour-1.jpg" alt="">
      <div class="gtn">
          <span class="price">$399</span> 
          <h3> Group Tour in Maldivs</h3>
         <span class="text">Ameeru Ahmed Magu Male Maldives</span>  
          <p>
            <span class="start"></span>
            <span class="txt">500 reviews</span>
          </p>
      </div>
      </div>

      <div class="gtu ">
        <img src="./../../public/img/tour-2.jpg" alt="">
        <div class="gtn">
            <span class="price">$399</span> 
            <h3> Group Tour in Maldivs</h3>
           <span class="text">Ameeru Ahmed Magu Male Maldives</span>  
            <p>
              <span class="start"></span>
              <span class="txt">500 reviews</span>
            </p>
        </div>
      </div>

      <div class="gtu">
        <img src="./../../public/img/tour-3.jpg" alt="">
        <div class="gtn">
            <span class="price">$399</span> 
          <h3> Group Tour in Maldivs</h3>
         <span class="text">Ameeru Ahmed Magu Male Maldives</span>  
          <p>
            <span class="start"></span>
            <span class="txt">500 reviews</span>
          </p>
      </div>
    </div>

      <div class="gtu">
        <img src="./../../public/img/tour-4.jpg" alt="">
        <div class="gtn">
            <span class="price">$399</span> 
            <h3> Group Tour in Maldivs</h3>
           <span class="text">Ameeru Ahmed Magu Male Maldives</span>  
            <p>
              <span class="start"></span>
              <span class="txt">500 reviews</span>
            </p>
      </div>
    </div>
    </div>
    
    <div class="ghi">
      <div class="gtu">
        <img src="./../../public/img/tour-5.jpg" alt="">
        <div class="gtn"> 
            <span class="price">$399</span> 
            <h3> Group Tour in Maldivs</h3>
           <span class="text">Ameeru Ahmed Magu Male Maldives</span>  
            <p>
              <span class="start"></span>
              <span class="txt">500 reviews</span>
            </p>
        </div>
      </div>

      <div class="gtu">
        <img src="./../../public/img/tour-6.jpg" alt="">
        <div class="gtn">
            <span class="price">$399</span> 
          <h3> Group Tour in Maldivs</h3>
         <span class="text">Ameeru Ahmed Magu Male Maldives</span>  
          <p>
            <span class="start"></span>
            <span class="txt">500 reviews</span>
          </p>
      </div>
    </div>

      <div class="gtu">
        <img src="./../../public/img/tour-7.jpg" alt="">
        <div class="gtn">
            <span class="price">$399</span> 
          <h3> Group Tour in Maldivs</h3>
         <span class="text">Ameeru Ahmed Magu Male Maldives</span>  
          <p>
            <span class="start"></span>
            <span class="txt">500 reviews</span>
          </p>
        </div>
      </div>

      <div class="gtu">
        <img src="./../../public/img/tour-8.jpg" alt="">
        <div class="gtn">
            <span class="price">$399</span> 
          <h3> Group Tour in Maldivs</h3>
         <span class="text">Ameeru Ahmed Magu Male Maldives</span>  
          <p>
            <span class="start"></span>
            <span class="txt">500 reviews</span>
          </p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<style scoped>
  *{
    margin:0 auto;padding: 0;
  }
   .sex{
     width:100%;
     height: 800px
   }
   .fg{
     width: 100%;
     height: 800px;
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
     width: 1663px;
     height: 400px;
     display: flex;
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

