<template>
    <div class="dark">
    <div class="motai">
        用户名:<el-input v-model="uname" placeholder="请输入用户名"></el-input>
        密码:<el-input v-model="password" placeholder="请输入密码"></el-input>
        性别:<el-radio v-model="gender" label="1">男</el-radio>
        <el-radio v-model="gender" label="2">女</el-radio><br>
        生日:<el-date-picker v-model="date" type="date" placeholder="选择日期"></el-date-picker><br>
        手机号码:<el-input v-model="phone" placeholder="请输入手机号码"></el-input>
        邮箱:<el-input v-model="email" placeholder="请输入邮箱"></el-input>
   <el-button @click="insert">注册</el-button>
    </div>
    </div>
</template>
<script> 
export default {
   
    data(){
        return{
            uname:"",
            password:"",
            gender:"1",
            date:"",
            phone:"",
            email:"",
            avatar:'',
	    }
    },
    methods:{
        insert(){
            var result=this.result;
            var reg1=/^[a-z0-9]{4,12}$/i;
            var uname=this.uname;
            var upwd=this.password;
            if(!reg1.test(uname)){
                this.$message({
                    message:"用户名格式不正确",
                    type:"warning"
                });
                return;
            }
            if(!reg1.test(upwd)){
                this.$message({
                    message:"密码格式不正确",
                    type:"warning"
                });
                return;
            }
            var reg2=/^1[3-9]\d{9}$/i;
            var phone=this.phone;
            if(!reg2.test(phone)){
                this.$message({
                    message:"手机号码格式不正确",
                    type:"warning"
                });
                return;
            }
            var reg3=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/i;
            var email=this.email;
            if(!reg3.test(email)){
                this.$message({
                    message:"邮箱格式不正确",
                    type:"warning"
                });
                return;
            }
            var gender=this.gender;
            var birthday=this.birthday;
            var url="insert";
            var obj={uname:uname,upwd:upwd,gender:gender,birthday:birthday,email:email,phone:phone};
            this.axios.post(url,obj).then(res=>{
                if(res.data.code===1){
                    this.$message("注册成功");
                }else{
                    this.$message("注册失败")
                }
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>
<style scoped>
*{
    border: 0;
    margin: 0;
    padding: 0;
}
.dark{
    width: 100%;
    height: 100%;
    background-color: rgba(43, 44, 44, 0.226);
}
.motai{
    position: absolute;
    width: 40%;
    height: 50%;
    background-color: aliceblue;
}
.hide {
    display: none;
}

.img-item {
    width: 4.4rem;
    height: 3.75rem;
    float: left;
    margin-left: 1.5rem;
    margin-top: 0.5rem;
}

.img-item img {
    width: 100%;
    height: 100%;
}
.active-pic {
    font-size: 0.6rem;
    color: #9b9b9b;
    padding: 0 1rem 0 1.5rem;
    margin-top: 1rem;
}

.add-pic {
    background: #f3f3f3;
    width: 4.4rem;
    height: 3.75rem;
    float: left;
    margin-left: 1.5rem;
    margin-top: 0.5rem;
    text-align: center;
    font-size: 2rem;
    line-height: 3.5rem;
    color: #979797;
    position: relative;
}

.add-pic input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    opacity: 0;
}

</style>
