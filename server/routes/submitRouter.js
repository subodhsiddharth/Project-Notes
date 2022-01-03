require('dotenv').config();
const express = require('express');
var request = require("request");
var jwt = require('jsonwebtoken');

const Questions = require('../models/question');
const Reports = require('../models/report');

const submitRouter = express.Router();

var authenticate = require('../authenticate');

submitRouter.use(express.json());
//submitRouter.use(express.urlencoded({ extended: true }));


let testInput = "";
let testOutput = [];
let status;
let evaluation;
let languageUsed;
let compileTime;
let question;
let user;
let testcasePassed;
let reportOBj={};
let bearerToken;
let demoReport = {
  user: '61cc0ef15c9f00cf9e2454ef',
  question: '61cae1643a71d187904a1970',
  status: 'Partially Solved',
  languageUsed: 'C',
  compileTime: '0 sec',
  testcasePassed: '50%'
}
// let reportJSON;
// let createReport;

submitRouter.post("/", authenticate.verifyUser,(req, res) => {
  let usertoken = req.headers.authorization;
  bearerToken = usertoken;
  //console.log(usertoken);
  let token = usertoken.split(' ');
  //console.log(token);
  let decoded = jwt.verify(token[1], process.env.SECRET_KEY);
  user = decoded._id;
  //console.log(user);
  let codeBody = [];
  req
    .on("data", chunk => {
      codeBody.push(chunk);
    })
    .on("end", () => {
      codeBody = Buffer.concat(codeBody).toString();
      bodyObj = JSON.parse(codeBody);
      //console.log(bodyObj);
      let code = bodyObj.code.toString();
      let language = bodyObj.language.toString();
      languageUsed = language.toUpperCase();
      
      let correctOutput = testOutput//"57";//'120 \n5040 \n';
    
      console.log(correctOutput);

      let inputs = testInput;//"2 \n 5 \n 7";//bodyObj.standardIn.toString();

      console.log(inputs);
      
      var program = {
        script: code,
        language: language,
        stdin: inputs,
        versionIndex: "0",
        clientId: "1a06c1f835ba9b2ccf218d8fe381182d",
        clientSecret:
          "3762082933511c0ad39b8ba3908d45accbefaf946c38dd88161758185dc9dbec"
      };
      request(
        {
          url: "https://api.jdoodle.com/v1/execute",
          method: "POST",
          json: program
        },
        function (error, response, body) {
          console.log("error:", error);
          console.log("statusCode:", response && response.statusCode);
          console.log("body:", body);
          let count = 0;
          let output = body.output.match(/\d+/g);
          //console.log(output);

          compileTime = Math.floor(Number(body.cpuTime));
          compileTime = `${compileTime} sec`;
          //console.log(compileTime)
          for(let i =0; i<output.length; i++){
            if(output[i] == correctOutput[i]){
                count += 1;
            }
          }
          body.output = `${count} out of ${output.length} test cases passed` 
          evaluation = (count/output.length) * 100;
          if(evaluation == 100){
            status = "Solved";
          }
          else if(evaluation > 0 && evaluation < 100){
            status = "Partially Solved";
          }
          else{
            status = "Unsolved";
          }
          testcasePassed = `${evaluation}%`;
         
          //var delayInMilliseconds = 10000; //1 second

            
          reportOBj.user = user;
          reportOBj.question = question;
          reportOBj.status =status;
          reportOBj.languageUsed = languageUsed;
          reportOBj.compileTime = compileTime;
          reportOBj.testcasePassed = testcasePassed;
          //reportJSON = JSON.stringify(reportOBj);
          console.log(reportOBj);
          // createReport = Reports.create( reportJSON, function (err, rept) {
          //   if (err) return err;
          //   console.log('Report created', rept);
          // });
          
          
         res.json(body);
         
        } 
      );

 
  //     // Reports.create(reportJSON)
  //     //    .then((rept) => {
  //     //     console.log('Report created', rept);
  //     //    }, (err) => err)
  //     //   .catch((err)=> err);
        
  //   });
  //   let formData = {
  //     user: user, 
  //     question: question,
  //     status: status,
  //     languageUsed: languageUsed,
  //     compileTime: compileTime,
  //     testcasePassed: testcasePassed 

  
  });
  // setTimeout(function() {
  //   //your code to be executed after 10 second
  //   let report = Reports.create(reportOBj)
  //     .then((rept) => {
  //      console.log('Report created', rept);
  //     }, (err) => err)
  //    .catch((err)=> err);
  //   }, delayInMilliseconds);

   let report = Reports.create(demoReport)
      .then((rept) => {
       console.log('Report created', rept);
      }, (err) => err)
     .catch((err)=> err);
    
     //console.log("Enter into report");
   request(
     {
       url: `http://localhost:8080/submit`,
       method: "POST",
       form: report,
       headers: {
        'Authorization': `${bearerToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
     },
     function (err, httpResponse, body) {
       console.log(err, body);
     }
   );
}); 

// submitRouter.route("/report")
// .post((req,res,next) => {
  
//   Questions.findById(question)
//   .then((ques) => {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'application/json');
//       testInput = ques.sampleInput;
//       testOutput = ques.sampleOutput;//.map(item => testOutput.push(item));
//       console.log(testOutput);
//       res.json(ques);
//   }, (err) => next(err))
//   .catch((err) => next(err));
// })

submitRouter.route('/:quesId')
.get((req,res,next) => {
    question = req.params.quesId;
    //console.log(question);
    Questions.findById(question)
    .then((ques) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        testInput = ques.sampleInput;
        testOutput = ques.sampleOutput;//.map(item => testOutput.push(item));
        console.log(testOutput);
        res.json(ques);
    }, (err) => next(err))
    .catch((err) => next(err));
})



module.exports = submitRouter;