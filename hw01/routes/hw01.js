const express = require('express')
const router = express.Router()

router.get('/:name', function (req, res) {
    var x = req.params.name
    res.json({string: x, length: x.length})
});

router.post('/', function (req, res) {
    var y = req.body.variable
    console.log(y);
    res.json({string: y, length: y.length})
});

module.exports = router;