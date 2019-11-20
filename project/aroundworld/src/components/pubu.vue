<template><div>
    <div class="container">
    <div class="box">
      <img src="./../../public/img/product_5d786606d9b7b.jpg" alt="">
      <h2>你好</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ullam aperiam ipsum, iusto deleniti alias ab, libero doloremque sit asperiores quaerat eos iste blanditiis aut possimus nihil nemo soluta culpa, eum nobis veritatis quod velit molestiae. Nobis ab blanditiis inventore quas iste porro rem non culpa amet, obcaecati nesciunt harum?</p>
    </div>
    <div class="box">
      <img src='./../../public/img/babyFade10.png' alt="">
      <h2>你好</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ullam aperiam ipsum, iusto deleniti alias ab, libero doloremque sit asperiores quaerat eos iste blanditiis aut possimus nihil nemo soluta culpa, eum nobis veritatis quod velit molestiae. Nobis ab blanditiis inventore quas iste porro rem non culpa amet, obcaecati nesciunt harum?</p>
    </div>
    <div class="box">
      <img src="./../../public/img/product_5d7866338d1a4.jpg" alt="">
      <h2>你好</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ullam aperiam ipsum, iusto deleniti alias ab, libero doloremque sit asperiores quaerat eos iste blanditiis aut possimus nihil nemo soluta culpa, eum nobis veritatis quod velit molestiae. Nobis ab blanditiis inventore quas iste porro rem non culpa amet, obcaecati nesciunt harum?</p>
    </div>
    <div class="box">
      <img src="./../../public/img/product_5d7866338d1a4.jpg" alt="">
      <h2>你好</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ullam aperiam ipsum, iusto deleniti alias ab, libero doloremque sit asperiores quaerat eos iste blanditiis aut possimus nihil nemo soluta culpa, eum nobis veritatis quod velit molestiae. Nobis ab blanditiis inventore quas iste porro rem non culpa amet, obcaecati nesciunt harum?</p>
    </div>
    <div class="box">
      <img src="./../../public/img/babyFade10.png" alt="">
      <h2>你好</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ullam aperiam ipsum, iusto deleniti alias ab, libero doloremque sit asperiores quaerat eos iste blanditiis aut possimus nihil nemo soluta culpa, eum nobis veritatis quod velit molestiae. Nobis ab blanditiis inventore quas iste porro rem non culpa amet, obcaecati nesciunt harum?</p>
    </div>
    <div class="box">
      <img src="./../../public/img/babyFade10.png" alt="">
      <h2>你好</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ullam aperiam ipsum, iusto deleniti alias ab, libero doloremque sit asperiores quaerat eos iste blanditiis aut possimus nihil nemo soluta culpa, eum nobis veritatis quod velit molestiae. Nobis ab blanditiis inventore quas iste porro rem non culpa amet, obcaecati nesciunt harum?</p>
    </div>
    <div class="box">
      <img src="./../../public/img/product_5d7866338d1a4.jpg" alt="">
      <h2>你好</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ullam aperiam ipsum, iusto deleniti alias ab, libero doloremque sit asperiores quaerat eos iste blanditiis aut possimus nihil nemo soluta culpa, eum nobis veritatis quod velit molestiae. Nobis ab blanditiis inventore quas iste porro rem non culpa amet, obcaecati nesciunt harum?</p>
    </div>
    <div class="box">
      <img src="./../../public/img/product_5d7866338d1a4.jpg" alt="">
      <h2>你好</h2>
      <p>Lorem, ipsum dolor sit amet consectquaerat eos iste blanditiis aut possimus nihil nemo soluta culpa, eum nobis veritatis quod velit molestiae. Nobis ab blanditiis inventore quas iste porro rem non culpa amet, obcaecati nesciunt harum?</p>
    </div>
  </div></div>
</template>
<script>
export default {
    
}
</script>
  
<style scoped>
 h2{
     font-size: 30px;

     text-align: center;
       
     padding: 48px;
   }
.container{
      width:80%;
      margin:20px auto;
      columns: 4;
      column-gap: 40px;
    }
    .container .box{
      width:100%;
      margin:0 0 20px;
      padding:10px;
      background:rgba(205, 236, 248, 0.39);
      overflow: hidden;
      break-inside: avoid;
      
    }
    .container .box:hover{
      
      box-shadow: rgba(77, 173, 152, 0.733)  5px 10px 20px  ;
    }
    
    .container .box img{
      max-width: 100%;
    }
    .container .box p{
      margin: 0;
      padding:0 0 10px;
      font-size:16px;
    }
    @media(max-width: 1200px)
    {
      .container{
        columns: 3;
        width:calc(100%-40px);
        box-sizing: border-box;
        padding:20px 20px 20px 0;
      }
    }
    @media(max-width: 768px)
    {
      .container{
        columns: 2;
              }
    }
    @media(max-width: 480px)
    {
      .container{
        columns: 1;
              }
    }
</style>
