<template>
    <div>
        用户名:<el-input v-model="input" placeholder="请输入用户名"></el-input>
        密码:<el-input placeholder="请输入密码" v-model="input" show-password></el-input>
        <el-button>登录</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            input:""
        }
    }
}
</script>