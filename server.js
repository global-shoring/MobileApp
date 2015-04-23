var express = require('express'),
    MongoClient = require('mongodb').MongoClient,
    path = require('path'),
    logger = require('winston');
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    http = require('http'),
    swig = require('swig'),
    routes = require('./server/routes/index'),
    Conf = require('./conf');

var config = new Conf().load("local", { PORT: 3000 });

var app = express();

MongoClient.connect(config.MONGODB_URL, function (err, db) {
    if (err) throw err;
   
    app.set('port', process.env.PORT || 3000);

    // Register our templating engine
    app.engine('html', swig.renderFile);

    app.set('view engine', 'html');
    app.set('views', __dirname + '/server/views');
    app.set('view cache', true);

    swig.setDefaults({ cache: false });

    // uncomment after placing your favicon in /public
    //app.use(favicon(__dirname + '/public/favicon.ico'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, '/www')));
    
    // create a write stream (in append mode) 
    logger.add(logger.transports.File, { filename: 'access.log' });
    //logger.remove(logger.transports.Console);

    logger.log('info', 'Application Started....');

    logger.level = 'debug';
    
    // Application routes
    routes(app, db);

  

    http.createServer(app).listen(app.get('port'), function () {
        console.log("Express server listening on port " + app.get('port'));
    });

    // verify if database exists, if not create sample data.
    var InitData = require('./server/data/initialData'),
        initData = new InitData(db);

    initData.verifyData(function (error, success) {
        if (error) {
            logger.log('debug', 'error while verifying data' + error);
        } else {
            logger.log('debug', success);
        }
    });
});


module.exports = app;
