var express = require('express');

var app = express();
var router = express.Router();

router.get('/', function (req, res, next) {
    req.url = 'index.html';
    next();
});
app.use(router);
app.use(express.static('./src'));

app.listen(9990, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('start listen');
});