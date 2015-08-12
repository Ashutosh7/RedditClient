module.exports = { getSubJSON: function(subredditName, subredditType , after, resToClient){
	var http = require('http');
	var filterjson = require('./getFilteredJSON');
	var fieldarray = require('./getFieldArray');
	if(subredditName === ""){
		var url = "http://www.reddit.com/" + subredditType + ".json" + "?after=" + after;
	}
	else {
		var url = "http://www.reddit.com/r/" + subredditName + "/" + subredditType + ".json" + "?after=" + after;
	}
	http.get(url, function(resfromReddit) {
			var body='';
			resfromReddit.on('data', function(chunk) {
				body += chunk.toString();
				});
			resfromReddit.on('end', function(){
				fieldArray = fieldarray.getFieldArray("getsubreddit");
				var redditRespJSON = JSON.parse(body)
				var filtJSON = filterjson.getFiltJSON(fieldArray,redditRespJSON);
				resToClient.json(filtJSON);
				});

			}).on('error', function(e) {
				resToClient.json({ error : e.message});
				});
	}
};
