var mongoose = require('mongoose')

var PostSchema = new mongoose.Schema({
  title: {type:String, defaul:''},
  text: {type:String, default:''},
  type: {type:String, default:''},
  icon: {type:String, default:''}
})

module.exports = mongoose.model('PostSchema', PostSchema)
