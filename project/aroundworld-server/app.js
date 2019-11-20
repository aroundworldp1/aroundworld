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
var bodyParser = require('body-parser')
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.get("/login",(req,res)=>{
   var uname=req.query.uname;
   var upwd=req.query.upwd;
   var sql="SELECT uid FROM user WHERE uname=? AND upwd=?";
   pool.query(sql,[uname,upwd],(err,result)=>{
      if(err)throw err;
      if(result.length==0){
         res.send({code:-1,msg:"用户名或密码有误"});
      }else{
         var uid=result[0].uid;
         req.session.uid=uid;
         res.send({code:1,msg:"登录成功"});
      }
   })
})

server.post("/insert",(req,res)=>{
   var uname=req.body.uname;
   var upwd=req.body.upwd;
   var gender=req.body.gender;
   var birthday=req.body.birthday;
   var email=req.body.email;
   var phone=req.body.phone;
   var sql="INSERT INTO user(uname,upwd,gender,birthday,email,phone) values(?,?,?,?,?,?)";
   pool.query(sql,[uname,upwd,gender,birthday,email,phone],(err,result)=>{
      if(err)throw err;
      if(result.affectedRows==1){
         res.send({code:1,msg:"注册成功"});
         return;
      }else{
         res.send({code:-1,msg:"注册失败"})
      }
   })
})

server.get("/showuser",(req,res)=>{
    var uname=req.query.uname;
    var sql="SELECT birthday,email,avatar,phone,gender FROM user WHERE uname=?";
    pool.query(sql,[uname],(err,result)=>{
       if(err)throw err;
       if(result.length==0){
          res.send({code:-1,msg:"用户名有误"});
       }else{
          var data=result;
          console.log(result);
        res.send({code:1,msg:'进入个人页面成功',rows:data});
          
       }
    })
 })
 server.get("/showart",(req,res)=>{
    var writer=req.query.writer;
    var sql="SELECT aid,title,puttime FROM article WHERE writer=?";
    pool.query(sql,[writer],(err,result)=>{
       if(err)throw err;
       if(result.length==0){
          res.send({code:-1,msg:"数据加载失败"});
       }else{
          var data=result;
          console.log(result);
        res.send({code:1,msg:'数据加载成功',rows:data});
          
       }
    })
 })
 server.get("/showcom",(req,res)=>{
    var writer=req.query.writer;
    var sql="SELECT cid,content,puttime FROM comment WHERE writer=?";
    pool.query(sql,[writer],(err,result)=>{
       if(err)throw err;
       if(result.length==0){
          res.send({code:-1,msg:"数据加载失败"});
       }else{
          var data=result;
          console.log(result);
        res.send({code:1,msg:'数据加载成功',rows:data});
          
       }
    })
 })