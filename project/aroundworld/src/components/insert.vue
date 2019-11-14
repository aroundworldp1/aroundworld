<template>
    <div>
        用户名:<el-input v-model="uname" placeholder="请输入用户名"></el-input>
        密码:<el-input v-model="password" placeholder="请输入密码"></el-input>
        性别:<el-radio v-model="radio" label="1">男</el-radio>
        <el-radio v-model="radio" label="2">女</el-radio><br>
        生日:<el-date-picker v-model="date" type="date" placeholder="选择日期"></el-date-picker><br>
        头像:<el-avatar icon="el-icon-user-solid"></el-avatar><br>
        手机号码:<el-input v-model="phone" placeholder="请输入手机号码"></el-input>
        邮箱:<el-input v-model="email" placeholder="请输入邮箱"></el-input>
        <el-button @click="insert">注册</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            uname:"",
            password:"",
            radio:"1",
            date:"",
            phone:"",
            email:""
        }
    },
    methods:{
        insert(){
            var reg1=/^[a-z0-9]{4,12}$/i;
            var u=this.uname;
            var p=this.password;
            if(!reg1.test(u)){
                this.$message({
                    message:"用户名格式不正确",
                    type:"warning"
                });
                return;
            }
            if(!reg1.test(p)){
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
        }
    }
}
</script>