var mongoose = require('mongoose')

var LabSchema = new mongoose.Schema({
  title: {type:String, defaul:''},
  text: {type:String, default:''},
  type: {type:String, default:''},
  timestamp: {type:Data, default:Date.now}
})

module.exports = mongoose.model('LabSchema', LabSchema)
