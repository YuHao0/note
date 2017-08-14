'use strict';

var app = new Vue({
    el: '#app',
    data: function data() {
        return {
            m: 111
        };
    },

    methods: {
        router: function router(url) {
            getTpl('../src/components' + url + '/template.html', function (result) {
                console.log(result);
                history.pushState(null, null, url);
            });
        }
    }
});
function getTpl(url, callback) {
    $.ajax({
        type: "get",
        url: url,
        dataType: "html",
        success: function success(result) {
            console.log(result, 'success');
            callback(result);
        },
        error: function error(result) {
            console.log(result, 'error');
        }
    });
}

var cacheStateAndFireUrlChange = function cacheStateAndFireUrlChange() {
    console.log(location.href);
    return;
    var url = location.hash.split('#/')[1];
    !!url && getTpl('../HTML/' + url + '.html', function (result) {
        $('#routerView').empty().append(result);
    });
};
onpopstate = cacheStateAndFireUrlChange();