var express = require('express')
var router = express.Router()
var Entry = require('../models/Entry')


router.get('/:resource', function(req, res, next) {
	console.log('api route')
	if (error){
		res.json({
			confirmation:'fail',
			message:'invalid resource'
		})
		return		
	}

	res.json({
		confirmation:'success',
		message:'valid resource'
	})

})

module.exports = router