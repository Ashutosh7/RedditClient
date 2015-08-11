module.exports = { getSubJSON: function(subredditName, subredditType , after, resToClient){
	var http = require('http');
	var url = "http://www.reddit.com/r/" + subredditName + "/" + subredditType + ".json" + "?after=" + after;
	http.get(url, function(resfromReddit) {
			var body='';
			resfromReddit.on('data', function(chunk) {
				body += chunk.toString();
				});
			resfromReddit.on('end', function(){
				var redditRespJSON = JSON.parse(body)
				resToClient.json(redditRespJSON);
				});

			}).on('error', function(e) {
				return e;
				});
	}
};
