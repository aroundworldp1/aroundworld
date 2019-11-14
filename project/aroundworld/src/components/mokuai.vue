<template>
    <div class="sex" style="background-color:rgba(240, 248, 255, 0.336)">
    <h2>Most Popular Destination</h2>
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
     height: 949px
   }
   h2{
     font-size: 30px;

     text-align: center;
       
     padding: 48px;
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
   .gtu:hover .gtn{
     background-color:#ffffff;
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
   
</style>

