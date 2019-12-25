import Vue from "vue";
import Router from "vue-router";
import Home from  "../views/Home.vue";
import Help from "../views/Help.vue";
import Blog from "../views/Blog.vue";
import Test from "../views/Test.vue"
//import Mj from '../views/Mj.vue';
Vue.use (Router);
export default new Router({
mode : "history",
routes :[
{

    path : "/",
    name : "home",
    component : Home
},
{

    path : "/help",
    name : "help",
    component : Help
},
{

    path : "/blog",
    name : "blog",
    component : Blog
},
{

    path : "/test",
    name : "test",
    component : Test
},


 {   

path : "/about",
name : "about",
// route level code-splitting
// // this generates a sperate chunk (about.[hash].js) for this route
// // which is lazy-loaded when the route is visted
component:() =>
import ("../views/About.vue")
 },




]


});