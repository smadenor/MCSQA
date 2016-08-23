/**
 * The ExpressJS namespace.
 * @external ExpressApplicationObject
 * @see {@link http://expressjs.com/3x/api.html#app}
 */ 

/**
 * Mobile Cloud custom code service entry point.
 * @param {external:ExpressApplicationObject}
 * service 
 */
module.exports = function(service) {


	/**
	 *  The file samples.txt in the archive that this file was packaged with contains some example code.
	 */


	service.get('/mobile/custom/CustomCodeMOSAPI/getCollections', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = [ 
					  { 
					    "id": 100, 
					    "username": "myusername", 
					    "name": "The user"
					  }, 
					  { 
					    "id": 101, 
					    "username": "myusername2", 
					    "name": "The user2"
					  } 
					] ;
			}
		}
		res.send(statusCode, result);
	});

	service.head('/mobile/custom/CustomCodeMOSAPI/getCollections/:collName', function(req,res) {
		var result = {};
		var statusCode = 200;
		res.send(statusCode, result);
	});

	service.get('/mobile/custom/CustomCodeMOSAPI/getCollections/:collName', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = [ 
					  { 
					    "id": 100, 
					    "username": "myusername", 
					    "name": "The user"
					  }, 
					  { 
					    "id": 101, 
					    "username": "myusername2", 
					    "name": "The user2"
					  } 
					];
			}
		}
		res.send(statusCode, result);
	});

	service.post('/mobile/custom/CustomCodeMOSAPI/createObject', function(req,res) {
		var result = {};
		var statusCode = 201;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = { 
					  "id": 101, 
					  "username": "myusername2", 
					  "name": "The user2"
					} ;
			}
		}
		res.send(statusCode, result);
	});

	service.post('/mobile/custom/CustomCodeMOSAPI/users', function(req,res) {
		var result = {};
		var statusCode = 201;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = { 
					  "id": 101, 
					  "username": "myusername2", 
					  "name": "The user2"
					} ;
			}
		}
		res.send(statusCode, result);
	});

	service.get('/mobile/custom/CustomCodeMOSAPI/users', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = [ 
					  { 
					    "id": 100, 
					    "username": "myusername", 
					    "name": "The user"
					  }, 
					  { 
					    "id": 101, 
					    "username": "myusername2", 
					    "name": "The user2"
					  } 
					] ;
			}
		}
		res.send(statusCode, result);
	});

	service.get('/mobile/custom/CustomCodeMOSAPI/users/:id', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = { 
					  "id": 101, 
					  "username": "myusername2", 
					  "name": "The user2"
					} ;
			}
		}
		res.send(statusCode, result);
	});

	service.delete('/mobile/custom/CustomCodeMOSAPI/users/:id', function(req,res) {
		var result = {};
		var statusCode = 200;
		res.send(statusCode, result);
	});

	service.head('/mobile/custom/CustomCodeMOSAPI/users/:id', function(req,res) {
		var result = {};
		var statusCode = 200;
		res.send(statusCode, result);
	});

	service.put('/mobile/custom/CustomCodeMOSAPI/users/:id', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = { 
					  "id": 101, 
					  "username": "myusername2", 
					  "name": "The user2"
					} ;
			}
		}
		res.send(statusCode, result);
	});

};
