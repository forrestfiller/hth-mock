var mongoose = require('mongoose')

var ToolSchema = new mongoose.Schema({
  title: {type:String, defaul:''},
  text: {type:String, default:''},
  type: {type:String, default:''}
})

module.exports = mongoose.model('ToolSchema', ToolSchema)
