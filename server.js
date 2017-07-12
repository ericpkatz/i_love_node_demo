var express = require('express');
var swig = require('swig');
var path = require('path');
var db = require('./db');
swig.setDefaults({ cache: false });

var app = express();
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(function(req, res, next){
  console.log(req.url);
  next();
});

app.get('/', function(req, res, next){
  res.render('index', { count: db.getModules().length });
});

app.get('/modules', function(req, res, next){
  res.render('modules', { modules: db.getModules() });
});

app.get('/modules/:id', function(req, res, next){
  res.render('module', { module: db.getModule(req.params.id*1) });
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log(`listening on port ${ port }`);
});
