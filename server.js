// BASE SETUP
// =============================================================================

// call the packages needed
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var sendReqtoClient = require('./sendReqtoClient');
// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// ROUTES FOR THE API
// =============================================================================
var router = express.Router();

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
		sendReqtoClient.sendFiltJSON("", "hot", req.query.after, resToClient, "frontpage")	
		});

router.get('/reddits', function(req,resToClient){
		sendReqtoClient.sendFiltJSON("", "", req.query.after,resToClient, "getsublist");
		});

router.get('/r/:subRedditName/:subRedditType', function(req, resToClient) {
		sendReqtoClient.sendFiltJSON(req.params.subRedditName, req.params.subRedditType, req.query.after, resToClient, "getsubreddit")	
		});

router.get('/r/:subRedditName', function(req, resToClient) {
		sendReqtoClient.sendFiltJSON(req.params.subRedditName, "hot" , req.query.after, resToClient, "getsubreddit")	
		});

router.get('/:subRedditType', function(req, resToClient) {
		sendReqtoClient.sendFiltJSON("", req.params.subRedditType, req.query.after, resToClient, "frontpage")	
		});



// REGISTER ROUTES -------------------------------
// all the routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server started on ' + port);
