const express = require('express');
const router = express.Router();

//connecting to mongoose
const len = require('../model/length');

//GET
router.get('/', function (req, res) {
    len.find({}, function (err, results) {
        let all = [];
        for (i = 0; i < results.length; i++ )
            all.push({name: results[i].name, length: results[i].length});
        res.json(all);
    })
})

router.get('/:name', function (req, res) {
    let name = req.params.name;
    len.findOne({name: name}, function (err, results) {
        if(results == null) {
            //console.log('not found');
            const new_len = new len ( {name: name, length: name.length});
            new_len.save(function(err) {
                if (err) {
                    res.send(err)}
                else {
                    res.send({name: new_len.name, length: new_len.length})}
            })
        }
        else {
            //console.log('found');
            res.json({name: results.name, length: results.length});
        }
    })
})

//POST
router.post('/', function(req, res) {
    let name = req.body.variable;
    len.findOne({name: name}, function (err, results) {
        if(results == null) {
            //console.log('not found');
            const new_len = new len ( {name: name, length: name.length});
            new_len.save(function(err) {
                if (err) {
                    res.send(err)}
                else {
                    res.send({name: new_len.name, length: new_len.length})}
            })
        }
        else {
            //console.log('found');
            res.json({name: results.name, length: results.length});
        }
    })
})

//DELETE
router.delete('/:name', function (req, res) {
    let name = req.params.name
    len.findOne({name: name}, function (err, results) {
        if(results == null) {
            res.json({message: 'string not found.'})
        }
        else {
            len.findOneAndRemove({name:name}, function (err, results) {
                res.json({message: 'the string is successfully deleted.'})
            })
        }
    })
})

module.exports = router;
