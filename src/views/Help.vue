<template>
    <div class ="our-help">
        <h1>{{pageName}}</h1>
        <p>{{pageDescription}}</p>
        <div class="container">
         <div class = "alert alert-success alert-dismissible fade show" role ="alert">
            learn Vuejs
            <button type ="button" class ="close" data-dismiss ="alert" aria-label="close">
                <span aria-hidden="true">&times;</span>
                </button>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data : function(){
        return {
            pageName :"Help",
            pageDescription :"This is Help Page",
        };
    },
    name : 'help'
}
</script>