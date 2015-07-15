var express = require('express');
var router = express.Router();

/* GET groups */
router.get('/', function (req, res) {
    var responseJson = { groups: "Listing all the groups" };
    res.json(responseJson)
});

router.post(function (req, res) {
    var x = req.body;
});

module.exports = router;