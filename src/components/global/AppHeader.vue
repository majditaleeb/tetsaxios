<template>
    <div  class ="header">
       <div class= "container">
        <div class = "logo"> majdi benz</div>
    <ul class="text-right">
      <router-link to="/" tag ="li">
      <a> home</a> 
      </router-link> 
      <router-link to="/about" tag = "li"> <a>about</a>  </router-link>
      <router-link to="/help" tag = "li"> <a>Help</a> </router-link>
      <router-link to="/blog" tag = "li"> <a>Blog</a> </router-link>
   <router-link to="/test" tag = "li"> <a>Test</a> </router-link>
    
    </ul>
       </div>
    </div>
</template>
<script>

export default {
    name : 'AppHeader'
}
</script>
<style lang="scss" scoped>
.header {
background-color :#333;
color :#FFF;
overflow: hidden;
     
}
.logo{
font-size : 24px;
padding : 20px;
float : left;
width :200px;

}
ul {
float : left;
width : calc(100%-200px);
margin:0;


}
li{

padding: 20px;
display: inline-block;
font-size: 18px;
a{
    color :#FFF;

}

}
</style>
