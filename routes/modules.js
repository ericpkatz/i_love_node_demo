var db = require('../db');

var app = require('express').Router();

module.exports = app;

app.get('/', function(req, res, next){
  res.render('modules', { modules: db.getModules() });
});

app.post('/', function(req, res, next){
  db.createModule(req.body);
  res.redirect('/modules');
});

app.get('/:id', function(req, res, next){
  res.render('module', { module: db.getModule(req.params.id*1) });
});

app.delete('/:id', function(req, res, next){
  db.deleteModule(req.params.id*1);
  res.redirect('/modules');
});
