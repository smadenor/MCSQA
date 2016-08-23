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


	service.get('/mobile/custom/CustomCodeCallingInternet/callGoogleMapsUsingHttpModule', function(req,res) {
		var result = {};
		var statusCode = 200;
		res.send(statusCode, result);
	});

	service.get('/mobile/custom/CustomCodeCallingInternet/callGoogleMapsUsingNodeModule', function(req,res) {
		var result = {};
		var statusCode = 200;
		res.send(statusCode, result);
	});

	service.get('/mobile/custom/CustomCodeCallingInternet/callGoogleMapsUsingRequestModule', function(req,res) {
		var result = {};
		var statusCode = 200;
		res.send(statusCode, result);
	});

};
