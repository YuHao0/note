'use strict';

var _map = require('common/map.js');

var _map2 = _interopRequireDefault(_map);

var _app = require('app.vue');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new VueRouter({
    routes: _map2.default,
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
});

new Vue({
    el: '#app',
    VueRouter: VueRouter,
    render: function render(h) {
        return h(_app2.default);
    }
});