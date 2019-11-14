<template>
    <div>
        用户名:<el-input v-model="uname" placeholder="请输入用户名"></el-input>
        密码:<el-input placeholder="请输入密码" v-model="password" show-password></el-input>
        <el-button>登录</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            uname:"",
            password:""
        }
    }
}
</script>