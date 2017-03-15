#!/usr/bin/env node
/*jshint esversion: 6 */

var reload = require('require-reload')(require)
var fs = require('fs')
var express = require('express')
var app = express()
var path = require('path')
var log = console.log
var bodyParser = require('body-parser');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Pretty print JSON responses
app.set('json spaces', 2);

app.use(function (req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next()
});

app.get('/wallboardData',(req, res, next) => {
	var jsonData = reload('./public/jsonData')
	res.json(jsonData)
})

app.listen(process.env.PORT || 3000, () => {
	log('Running...');
	});
