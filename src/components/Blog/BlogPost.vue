<template>
<div class="post-box">
    <span class ="post-views">10</span>
    <h3 class = "post-title">Blog post title </h3>
    <span class ="post-date"> 30/12/2012 </span>
     <p class ="post-content" > lablablbdkjdf </p>
    <div class="row">
        <div class="col-md-6">
            <span class ="post-author"> post author</span>

        </div>
        <div class="col md-6">
            <span class ="post-category"> post category</span>


        </div>



    </div>
</div>
  
</template>

<script>
export default {
name : "post",
};
</script>
<style lang="scss" scoped>
.post-box{
padding :20px;
background-color: #fff;
box-shadow:0 0 10px #DDD;
position: relative;
.post-views{

    position: absolute;
    text-align: left;
    top : 5px;
    right: 5px;
    background-color: #f00;
    border-radius: 4px; 
    padding:  1px 5 px;
        color: #fff;
    text-align: center;
    font-weight: bold;
}
.post-title{

    font-weight: bold;
    color: #000;
        display: block;
    padding: 0 0 6;
    
    font-size: 13px;
    text-align: left;
    color: #888;
}
.post-date{
    
    text-align: left;
    color: #b889;
        display: block;
    padding: 0 0 6;
    
}
.post-content{
        line-height: 2;
}
.post-author{

    background-color: #ddd;
    padding: 4px 10px;
    border-radius: 4px;
}
.post-category{

    background-color: #ddd;
    padding: 4px 10px;
    border-radius: 4px;
}

}














</style>

