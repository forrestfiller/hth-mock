var express = require('express')
var router = express.Router()
var Lab = require('../models/Lab')

var pages = ['index', 'toolbox', 'createlab', 'lab']

router.get('/', function(req, res, next) {

	Lab.find(null, function(err, labs){
		if (err){
			res.render('error', err)
			return
		}

		var data = {
			current: labs
		}

  		res.render('index', data)
	})
})

router.get('/:page', function(req, res, next) {
	var page = req.params.page
	var id = req.query.id
	var format = req.query.format
	if (format == null)
		format = 'html'

	if (pages.indexOf(page) == -1){ //page not found show error
		res.render('error', { message:'Page not found' })
		return
	}
	if (page != 'lab'){
		res.render(page, null)	
		return
	}

	Lab.findById(id, function(err, lab){
		if (err){
			res.render('error', { message: 'Page not found findById' })
			return
		}
		if (format == 'json'){
			res.json(lab)
		}
		else {
		res.render(page, lab)			
		}

	})
	
})

router.post('/:page', function(req, res, next) {
	var page = req.params.page
	if (pages.indexOf(page) == -1) {
		res.render('error', { message: 'Page not found'} )
		return
	}
	var params = req.body
	var type = params.type

	Lab.create(params, function(err, lab){
		if (err) {
			res.render('error', err)
			return
		}
		res.redirect('/')
	})



})












module.exports = router


