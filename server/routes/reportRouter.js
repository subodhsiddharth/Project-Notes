const express = require('express');

const Reports = require('../models/report');

const reportRouter = express.Router();

var authenticate = require('../authenticate');

reportRouter.use(express.json());

reportRouter.route('/')
.get((req,res,next) => {
    Reports.find({})
    .populate('user question')
    .then((rept) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(rept);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req,res,next) => {
    Reports.create(req.body)
    .then((rept) => {
        console.log('Report created', rept);
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(rept)
    }, (err) => next(err))
   .catch((err)=> next(err))
})
.put((req, res, next) => {
    res.statusCode =403;
    res.end('PUT operation not supported on /reports');
})
.delete((req, res, next) => {
    Reports.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});


module.exports = reportRouter;