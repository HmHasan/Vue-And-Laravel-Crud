import Vue from 'vue';
import VueRouter from "vue-router";
import Home from "../components/Home";
import category from "../components/pages/category";
import index from "../category/index";
import create from "../components/pages/create";
import edit from "../components/pages/edit"
Vue.use(VueRouter);
const routes  = new VueRouter({
    mode:'history',
    routes:
    [
        {
            path:'/',
            component:Home,
            name:'home'
        },
        {
            path: '/category',
            component: category,
            name:'category',
        },
        {
            path: '/category/index',
            component: index,
            name:'category-index',
        },
        {
            path: '/category/create',
            component: create,
            name:'category-create',
        },
        {
            path: '/category/edit/:id',
            component: edit,
            name:'category-edit',
        }
    ]
});
export default routes;
