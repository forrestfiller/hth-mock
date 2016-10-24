var mongoose = require('mongoose')

var EntrySchema = new mongoose.Schema({
  title: {type:String, defaul:''},
  text: {type:String, default:''},
  type: {type:String, default:''},
  approved: {type:Boolean, default:'yes'},
  timestamp: {type:Date, default:Date.now}
})

module.exports = mongoose.model('EntrySchema', EntrySchema)
