'use strict';

var _ = require('underscore');
var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

function readApiData() {
    return require('./data.json');
}

function search(term, data) {
    if (term) {
        return _.filter(data, function (record) {
            return _.reduce(record, function (found, value) {
                var re = new RegExp("\\b" + term + "\\b", "i");
                return found || !!re.exec(value);
            }, false);
        });
    }else{
        return data;
    }
}

app.get('/api/search', function (req, res) {
    res.json(search(req.query.term, readApiData()));
});

app.get('/index.html', function (req, res) {
    var index = fs.readFileSync('index.html', 'utf8');
    res.status(200).send(index);
});

app.get('/', function (req, res) {
    var index = fs.readFileSync('index.html', 'utf8');
    res.status(200).send(index);
});

app.get('/styles.css', function (req, res) {
    var index = fs.readFileSync('styles.css', 'utf8');
    res.status(200).send(index);
});

app.get('/systemjs.config.js', function (req, res) {
    var index = fs.readFileSync('systemjs.config.js', 'utf8');
    res.status(200).send(index);
});

app.use('/app', express.static('app'));

app.use('/templates', express.static('templates'));

app.use('/node_modules', express.static('node_modules'));

app.listen(4001, function () {
    console.log('node express server started');
});