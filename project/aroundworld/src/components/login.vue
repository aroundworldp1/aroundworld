<template>
    <div>
        用户名:<el-input v-model="uname" placeholder="请输入用户名"></el-input>
        密码:<el-input placeholder="请输入密码" v-model="password" show-password></el-input>
        <el-button @click="login">登录</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            uname:"",
            password:""
        }
    },
    methods:{
        login(){
            var reg = /^[a-z0-9]{4,12}$/i;
            var u = this.uname;
            var p = this.password;
            if(!reg.test(u)){
                this.$message({
                    message:"用户名格式不正确",
                    type:"warning"
                });
                return;
            }
            if(!reg.test(p)){
                this.$message({
                    message:"密码格式不正确",
                    type:"warning"
                });
                return;
            }
            var url="login";
            var obj={uname:u,upwd:p};
            this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code===1){
                    this.$message("登录成功");
                }else{
                    this.$message("用户名和密码有误");
                }
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>