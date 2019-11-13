//vue_server_000/app.js
//功能：服务器端程序
//1:下载四个模块
//  express			web服务器
//  mysql				mysql驱动
//  cors				处理跨域
//  express-session	会话session对象
//2:vue_server_000/进入命令行
//  npm i mysql express express-session cors
//3:加载四个第三方模块
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");

//4:配置数据库连接池:基本效率高保证
var pool = mysql.createPool({
   host:"127.0.0.1",
   user:"root",
   password:"",
   database:"aw",
   port:3306,
   connectionLimit:20
})
//5:创建web服务器
var server = express();
//6:配置跨域  允许程序列表
//  http://127.0.0.1:8080
//  http://localhost:8080
server.use(cors({
   origin:["http://127.0.0.1:8080","http://localhost:8080"],
   credentials:true  //每次请求验证
}))
//7:配置session环境
server.use(session({
   secret:"128位安全字符串",
   resave:true,         //请求更新数据 
   saveUninitialized:true//保存初始数据
}));
//8:配置静态目录 pubic
//8.1:创建public
server.use(express.static("public"))
//9:启动监听端口  3000
server.listen(3000);

//功能一:用户登录

// server.get("/login",(req,res)=>{
//  //1:获取参数uname/upwd
//  //脚手架传数 
//  // http://127.0.0.1:3000?uname=tom&upwd=123 
//  var uname = req.query.uname;
//  var upwd =  req.query.upwd;
//  console.log(1+":"+uname+":"+upwd);
//  //2:创建sql语句
//  var sql = "SELECT id FROM user WHERE uname = ? AND upwd = ?";
//  //3:执行sql语句
//  pool.query(sql,[uname,upwd],(err,result)=>{
//    //err 严重错误，程序停止
//    if(err)throw err;
//   //4:判断执行是否成功
//    if(result.length==0){
//      res.send({code:-1,msg:"用户名或密码有误"});
//    }else{
//      //登陆成功后将登陆凭证id保存session对象
//      //result[{id:3}]
//      var uid=result[0].id;
//      req.session.uid=uid;
//      console.log(req.session);
//      console.log(uid);
//      res.send({code:1,msg:"登录成功"});
//    }
//   //5:将结果发送脚手架  
//  })
// })

// //查询列表(分页)
// //sql= select lid ,price,lname,pic from xz_laptop where limit ?,?;
// // select count(id) as c from xz_laptop

// server.get("/product",(req,res)=>{
//   //2:获取(脚手架发来)数据 pno pageSize
//   var pno = req.query.pno;
//   var ps = req.query.pageSize;
//   //3:设置数据默认值
//   if(!pno){pno=1}
//   if(!ps){ps=20}
//   //4:创建变量offset计算数据库第一参数
//   var offset = (pno-1)*ps;
//   //5:给pageSize造型整型
//   ps = parseInt(ps);
//   //6:创建sql1 查询当前页内容
//   var sql1 = "SELECT lid,price,lname,pic FROM xz_laptop LIMIT ?,?";
//   //7:发送sql1语句
//   pool.query(sql1,[offset,ps],
//    (err,result)=>{
//       //查询成功回调函数 sql1
//       if(err)throw err;
//       //查询结果
//       var data = result;
//       //console.log(result);
//      //8:在执行成功回调函数中创建第二条 
//      var sql2 = "SELECT count(lid) as c FROM xz_laptop";
//      //9:查询记录总数
//      pool.query(sql2,(err,result)=>{
//        if(err)throw err;
//        var pageCount = Math.ceil(result[0].c/ps);
//        res.send(
//          {code:1,   //查询编码
//            msg:"查询成功",//原因
//            rows:data, //当前页内容
//            pageCount:pageCount//总页
//          })
//      })
//      //10:将所有查询结果封装成
//   })
//  })

//  //功能三:添加购物车 144~190
// //1:get /addcart
// server.get("/addcart",(req,res)=>{
//   //2:获取当前登录用户uid
//   var uid = req.session.uid;
//   //3:如果用户没有登录   !!!
//   if(!uid){
//    //4:返回错误消息 请登录
//    res.send({code:-1,msg:"请登录"});
//    return;
//   }
//   //5:获取商品编号;商品价格;商品名称
//   var lid = req.query.lid;
//   var price = req.query.price;
//   var lname = req.query.lname;
//   //6:查询指用户是否购买过此商品
//   var sql = "SELECT id FROM xz_cart WHERE uid = ? AND lid = ?";
//   //7:执行sql
//   pool.query(sql,[uid,lid],(err,result)=>{
//       if(err)throw err;
//   //8:如果用户没有购买过此商品添加
//   //9:如果用户己经购买过此商品更新数量
//       if(result.length==0){
//       var sql = `INSERT INTO xz_cart VALUES(null,${uid},${lid},${price},'${lname}',1)`; 
//       }else{
//       var sql =`UPDATE xz_cart SET count=count+1 WHERE uid=${uid} AND lid=${lid}`;
//       }
//       pool.query(sql,(err,result)=>{
//         if(err)throw err;
//         res.send({code:1,msg:"添加成功"});
//       })
//   })
//   //10:执行sql并且将结果返回用户
//   })
//   //session对象如果服务器重新启动
//   //丢失
//   //测试
//   //http://127.0.0.1:3000/addcart?lid=1&lname=mac&price=3333
//   //请登录
//   //http://127.0.0.1:3000/login?uname=tom&upwd=123
//   //http://127.0.0.1:3000/addcart?lid=1&lname=mac&price=3333
//   //刷新浏览器 count=4
  
// server.get('/findcart',(req,res)=>{
//   var uid=req.session.uid;
//   if(!uid){
//     res.send({code:-1,msg:'请登录'});
//     return;
//   }
//   var sql='select id,lid,lname,price,count from xz_cart where uid=?';
//   pool.query(sql,[uid],(err,result)=>{
//     if(err)throw err;
//     res.send({code:1,msg:'查询成功',data:result});
//   })
// })

// server.get('/del',(req,res)=>{
//   var uid=req.session.uid;
//   if(!uid){
//     res.send({code:-2,msg:'请登录'});
//     return;
//   }
//   var id=req.query.id;
//   var sql='delete from xz_cart where id=?';
//   pool.query(sql,[id],(err,result)=>{
//     if(err)throw err;
//     if(result.affectedRows>0){
//       res.send({code:1,msg:'删除成功'})
//     }else{
//       res.send({code:-1,msg:'删除失败'})
//     }
//   })
// })

// server.get('/delm',(req,res)=>{
//   var uid=req.session.uid;
//   if(!uid){
//     res.send({code:-2,msg:'请登录'});
//     return;
//   }
//   var ids=req.query.ids;
// })