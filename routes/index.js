var express = require('express')
var router = express.Router()
var Entry = require('../models/Entry')

var pages = ['index', 'error', 'createentry', 'entry' ]

router.get('/', function(req, res, next) {

	Entry.find(null, function(err, entries){
		if (err){
			res.render('error', err)
			return
		}

		var data = {
			current: entries
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

	if (pages.indexOf(page) == -1){
		res.render('error', { message:'Page not found' })
		return
	}
	if (page != 'entry'){
		res.render(page, null)	
		return
	}

	Entry.findById(id, function(err, entry){
		if (err){
			res.render('error', { message: 'Page not found findById' })
			return
		}
		if (format == 'json'){
			res.json(entry)
		}
		else {
		res.render(page, entry)			
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

	Entry.create(params, function(err, entry){
		if (err) {
			res.render('error', err)
			return
		}
		res.redirect('/')
	})

})






module.exports = router


