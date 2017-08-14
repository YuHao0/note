var app = new Vue({
    el: '#app',
    methods: {
        router(url){
            var reqUrl = location.origin + '/note/src/components' + url;
            getTpl(reqUrl + '/template.html', function (result) {
                history.pushState(null, null, url);
                $('#routerView').empty().append(result);
                $.getScript(reqUrl + '/controller.js');
            });
        }
    }
});

function getTpl(url, callback) {
    $.ajax({
        type: "get",
        url: url,
        dataType: "html",
        success: function (result) {
            console.log(result, 'success');
            callback(result);
        },
        error: function (result) {
            console.log(result, 'error');
        }
    });
}


var cacheStateAndFireUrlChange = function () {
    console.log(location.href);
};

$(window).on('popstate', cacheStateAndFireUrlChange);

