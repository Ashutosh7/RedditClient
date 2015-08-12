module.exports = { getFieldArray: function(reqName){

	if(reqName == "getsubreddit"){
		fieldArray = [ 'domain', 'author', 'over_18', 'thumbnail', 'num_comments', 'subreddit_id', 'post_hint', 'url', 'title', 'created_utc', 'preview', 'permalink', 'score', 'thumbnail', 'subreddit' ]
		}
	return fieldArray;
	}
};
