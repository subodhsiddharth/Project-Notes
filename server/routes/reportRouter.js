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
    Reports.deleteMany({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

reportRouter.route('/:respId')
.get((req,res,next) => {
    Reports.findById(req.params.respId)
    .then((rept) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(rept);
    }, (err) => next(rept))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /myreport'+ req.params.respId);
})
.put((req, res, next) => {
    Reports.findByIdAndUpdate(req.params.respId, {
        $set: req.body
    }, { new: true })
    .then((rept) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(rept);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Reports.findByIdAndRemove(req.params.respId)
    .then((rept) => {
        res.setHeader('Content-Type', 'application/json');
        res.send("Deleted successfully")
        res.json(rept);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = reportRouter;