var express = require('express')
var router = express.Router()
var Tool = require('../models/Tool')

var pages = ['index', 'toolbox', 'labs']

router.get('/', function(req, res, next) {
  res.render('index', null)
})

module.exports = router
