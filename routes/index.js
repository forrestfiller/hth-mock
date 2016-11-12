var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next){
	res.render('index', null)
})

router.get('/createentry', function(req, res, next){
	res.render('createentry', null)
})

router.get('/createcomment', function(req, res, next){
	res.render('createcomment', null)
})

module.exports = router