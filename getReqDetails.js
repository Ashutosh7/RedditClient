module.exports = { getDetailsObj: function(reqName, subredditName, subredditType, after){

	if(reqName == "getsubreddit"){
		var url = "http://www.reddit.com/r/" + subredditName + "/" + subredditType + ".json" + "?after=" + after;
		var fieldArray = [ 'domain', 'author', 'over_18', 'thumbnail', 'num_comments', 'subreddit_id', 'post_hint', 'url', 'title', 'created_utc', 'preview', 'permalink', 'score', 'thumbnail', 'subreddit' ]
	}
	if(reqName == "frontpage"){
		var url = "http://www.reddit.com/" + subredditType + ".json" + "?after=" + after;
		var fieldArray = [ 'domain', 'author', 'over_18', 'thumbnail', 'num_comments', 'subreddit_id', 'post_hint', 'url', 'title', 'created_utc', 'preview', 'permalink', 'score', 'thumbnail', 'subreddit' ]
	}
	if(reqName == "getsublist"){
		var url = "http://www.reddit.com/reddits.json" + "?after=" + after;
		var fieldArray = ['title', 'over_18', 'public_description_html', 'url', 'subscribers'];
		console.log("here");
	}
	var reqDetails={}
	reqDetails['url'] = url;
	reqDetails['fieldArray'] = fieldArray;
	return reqDetails;
}
};
