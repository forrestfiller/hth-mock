var Entry = require('../models/Entry')


module.exports = {

	find: function(params, callback){
		Entry.find(params, function(err, entries){
			if (err){
				callback(err, null)
				return
			}
			callback(null, entries)
		})
	},

	findById: function(id, callback){
		Entry.findById(id, function(err, entry){
			if (err){
				callback(err, null)
				return
			}
			callback(null, entry)
		})	
	},

	create: function(params, callback){
		Entry.create(params, function(err, entry){
			if (err){
				callback(err, null)
				return
			}

			callback(null, entry)
		})
	},

	update: function(id, params, callback){
		Entry.findByIdAndUpdate(id, params, {new:true}, function(err, entry){
			if (err){
				callback(err, null)
				return
			}
			callback(null, entry)
		})	
	},

	delete: function(id, callback){
		Entry.findByIdAndRemove(id, function(err){
			if (err){
				callback(err, null)
				return
			}
			callback(null, null)
		})
	}
}


