import Vue from 'vue'
require('./bootstrap');
import routes from "./routes";




// Vue.component('example-component', require('./components/Home.vue').default);



const app = new Vue({
    el: '#app',
    router:routes,
});
