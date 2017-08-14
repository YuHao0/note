var express = require('express');

var app = express();
var router = express.Router();
var port = 9000;
router.get('/', function (req, res, next) {
    req.url = 'index.html';
    next();
});
app.use(router);
app.use(express.static('./src'));
app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('start listen ' + port);
});