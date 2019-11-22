<template>
    <div>   
       <h1 @click='next'>地中海</h1>
    </div>
</template>
<script>
export default {
    methods:{ 
        next(){
            this.$router.push({path:'/region',query:{aera:'地中海'}});
        }
    }
}
</script>

<style scoped>

</style>
