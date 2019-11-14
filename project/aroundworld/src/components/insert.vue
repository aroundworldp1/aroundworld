<template>
    <div>
        用户名:<el-input v-model="uname" placeholder="请输入用户名"></el-input>
        密码:<el-input v-model="password" placeholder="请输入密码"></el-input>
        性别:<el-radio v-model="radio" label="1">男</el-radio>
        <el-radio v-model="radio" label="2">女</el-radio><br>
        生日:<el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="date"></el-input>
        头像:<el-avatar icon="el-icon-user-solid"></el-avatar><br>
        手机号码:<el-input v-model="phone" placeholder="请输入手机号码"></el-input>
        邮箱:<el-input v-model="email" placeholder="请输入邮箱"></el-input>
    </div>
</template>
<script>
export default {
    data(){
        return{
            uname:"",
            password:"",
            radio:"",
            date:"",
            phone:"",
            email:""
        }
    }
}
</script>