module.exports = { getListJSON: function( after, resToClient){
	var http = require('http');
	var filterjson = require('./getFilteredJSON');
	var fieldarray = require('./getFieldArray');
	var url = "http://www.reddit.com/reddits".json" + "?after=" + after;
	http.get(url, function(resfromReddit) {
			var body='';
			resfromReddit.on('data', function(chunk) {
				body += chunk.toString();
				});
			resfromReddit.on('end', function(){
				fieldArray = fieldarray.getFieldArray("getsublist");
				var redditRespJSON = JSON.parse(body)
				var filtJSON = filterjson.getFiltJSON(fieldArray,redditRespJSON);
				resToClient.json(filtJSON);
				});

			}).on('error', function(e) {
				resToClient.json({ error : e.message});
				});
	}
};
