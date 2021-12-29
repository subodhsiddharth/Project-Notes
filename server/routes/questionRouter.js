const express = require('express');

const Questions = require('../models/question');

const questionRouter = express.Router();

questionRouter.use(express.json());

questionRouter.route('/')
.get((req,res,next) => {
    Questions.find({})
    .then((ques) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(ques);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req,res,next) => {
    Questions.create(req.body)
    .then((ques) => {
        console.log('Question created', ques);
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(ques)
    }, (err) => next(err))
   .catch((err)=> next(err))
})
.put((req, res, next) => {
    res.statusCode =403;
    res.end('PUT operation not supported on /questions');
})
.delete((req, res, next) => {
    Questions.remove({})
    .then((enroll) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(enroll);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

/* ######################################## */

questionRouter.route('/:quesId')
.get((req,res,next) => {
    Questions.findById(req.params.quesId)
    .then((ques) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        module.exports.testInput = ques.sampleInput;
        //console.log(testInput);
        module.exports.testOutput = ques.sampleOutput;
        //console.log(testOutput);
        res.json(ques);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /questions'+ req.params.quesId);
})
.put((req, res, next) => {
    Questions.findByIdAndUpdate(req.params.quesId, {
        $set: req.body
    }, { new: true })
    .then((ques) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(ques);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Questions.findByIdAndRemove(req.params.quesId)
    .then((resp) => {
        res.setHeader('Content-Type', 'application/json');
        res.send("Deleted successfully")
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});


module.exports = questionRouter;
