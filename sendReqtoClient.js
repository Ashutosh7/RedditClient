module.exports = { sendFiltJSON: function(subredditName, subredditType , after, resToClient, reqName){
	var http = require('http');
	var filterjson = require('./getFilteredJSON');
	var getReqDetails = require('./getReqDetails');
	var reqDetails = getReqDetails.getDetailsObj(reqName,subredditName, subredditType, after);
	url = reqDetails['url'];
	fieldArray = reqDetails['fieldArray'];
	console.log(url);
	http.get(url, function(resfromReddit) {
			var body='';
			resfromReddit.on('data', function(chunk) {
				body += chunk.toString();
				});
			resfromReddit.on('end', function(){
				var redditRespJSON = JSON.parse(body)
				console.log(redditRespJSON);
				var filtJSON = filterjson.getFiltJSON(fieldArray,redditRespJSON);
				resToClient.json(filtJSON);
				});

			}).on('error', function(e) {
				resToClient.json({ "error" : e.message});
				});
	}
};
