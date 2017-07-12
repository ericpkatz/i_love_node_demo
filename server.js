var express = require('express');
var swig = require('swig');
var path = require('path');
var db = require('./db');
swig.setDefaults({ cache: false });

var app = express();
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use(require('body-parser').urlencoded( { extended: false } ));
app.use(require('method-override')('_method'));

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(function(req, res, next){
  console.log(req.url);
  next();
});

app.get('/', function(req, res, next){
  res.render('index', { count: db.getModules().length });
});

app.use('/modules', require('./routes/modules'));

app.use(function(err, req, res, next){
  res.render('error', { error: err });
});


var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log(`listening on port ${ port }`);
});
