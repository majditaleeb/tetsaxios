<template>
    <div class ="our-blog">
        <h1>{{pageName}}</h1>
        <p>{{pageDescription}}</p>
        <div class ="container">
            <div class = "row">
                <div class="col-md-8">
                    <div class="posts-area">
                      <blog-post />
                    </div>
                 </div>
                  <div class="col-md-4">
                      <div class="sidebar">
                          <blogSidebar />

                      </div>
                  </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import BlogPost from "@/components/Blog/BlogPost.vue";
import BlogSidebar from "@/components/Blog/BlogSidebar.vue";
export default {
    data : function(){
        return {
            pageName :"Blog",
            pageDescription :"This is Blog Page",
        };
    },
    name : 'blog',
    components :{
        BlogPost,
        BlogSidebar
    }
   
};
</script>