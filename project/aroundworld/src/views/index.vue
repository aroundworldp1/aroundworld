<template>
    <div>   
       <h1 v-for="(item,i) of list" :key="i" @click='next(i)'>{{item.rname}}</h1>
    </div>
</template>
<script>
export default {
     created(){
       this.loadregion();
     },
    data(){
        return{
           list:[],
        }
    },
    methods:{ 
        next(i){
            var aera=this.list[i].rname;
            console.log(aera);
            this.$router.push({path:'/region',query:{aera:aera}});
        },
        loadregion(){
            var url='showregion';
           this.axios.get(url).then(res=>{
                if(res.data.code===1){ 
                    var list=res.data.rows; 
                    this.list=list;
                    console.log(list);
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

</style>
