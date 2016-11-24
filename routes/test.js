var express = require('express');
var RequestContract = require('../ServiceContracts/RequestContract');
var router = express.Router();
var r;

/* GET test listing. */
router.get('/', function(req, res, next) {
    res.writeHead(200, {"Content-Type": "application/json"});
    var json = JSON.stringify({
        requestContract: r,
        another: "item",
        anotherthing: 'right here'
    });
    res.end(json);
});

router.post('/', function(req, res, next) {
    r = new RequestContract("1234");
    res.writeHead(200, {"Content-Type": "application/json"});
    var json = JSON.stringify({
        requestContract: r,
        another: "item"
    });
    res.end(json);
});

module.exports = router;
