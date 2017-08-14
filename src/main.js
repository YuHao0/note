import map from 'common/map.js';
import App from 'app.vue';
new VueRouter({
    routes: map,
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
});


new Vue({
    el: '#app',
    VueRouter,
    render: h => h(App)
});