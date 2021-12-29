const express = require('express');
var request = require("request");

const Questions = require('../models/question');

const submitRouter = express.Router();

var authenticate = require('../authenticate');

submitRouter.use(express.json());

let testInput = "";
let testOutput = [];

submitRouter.post("/", authenticate.verifyUser, (req, res) => {
  // res.set({
  //   "Access-Control-Allow-Origin": "https://compilor.study",
  //   "Access-Control-Allow-Header": "*",
  //   "Content-Type": "application/json",
  //   "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  // });
  let codeBody = [];
  req
    .on("data", chunk => {
      codeBody.push(chunk);
    })
    .on("end", () => {
      codeBody = Buffer.concat(codeBody).toString();
      bodyObj = JSON.parse(codeBody);
      console.log(bodyObj);
      let code = bodyObj.code.toString();
      let language = bodyObj.language.toString();
      
      let correctOutput = testOutput//"57";//'120 \n5040 \n';
    
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
          console.log(output);
          for(let i =0; i<output.length; i++){
            if(output[i] == correctOutput[i]){
                count += 1;
            }
          }
          body.output = `${count} out of ${output.length} test cases passed` 
          // if(output == correctOutput){
          //   body.output = "All test cases passed";
          //   //console.log( body.output);
          //   console.log("All test cases passed");
          //   return res.json(body);
            
          // }
          // else{
          //   console.log("Try again as hidden test casses are not passed");
          //   //testJson.Fail = "Try again as hidden test casses are not passed";
          //   body.output = "Try again as hidden test casses are not passed";
          // }
                    
          //testJson.Fail = "Try again as hidden test casses are not passed";
          //JSON.stringify(testJson.Fail);
          //let testCases = 0;
        //   let outputString = body.output;
        //   outputString = outputString.substring(0, outputString.length - 1);
        // //res.json(body);
        // for(let i = 0; i < testOutput.length; i++){

        //    if(outputString === testOutput[i]){
        //         console.log("Output match the input")
        //         count++;
        //         testArray[`Test Cases ${count}`] = 'Passed';
        //   }
        //   else{
        //         console.log("Output input does n't match");
        //         count++;
        //         testArray[`Test Cases ${count}`] = 'Failed';                      
        //   }
        // }
        //  console.log(testArray);
        //  let jsonObj = JSON.stringify(testArray); 
        //  console.log(jsonObj);
         res.json(body);
        } 
      );
    });
}); 

submitRouter.route('/:quesId')
.get((req,res,next) => {
    Questions.findById(req.params.quesId)
    .then((ques) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        testInput = ques.sampleInput;
        console.log(testInput);
        ques.sampleOutput.map(item => testOutput.push(item));
        console.log(testOutput);
        res.json(ques);
    }, (err) => next(err))
    .catch((err) => next(err));
})


// (async () => {
//   try {
//     const res = await fetch('http://localhost:3000/submit/61b9d00b216d986279cacb40');
//     //const headerDate = res.headers && res.headers.get('date') ? res.headers.get('date') : 'no response date';
//     console.log('Status Code:', res.status);
//     //console.log('Date in Response header:', headerDate);

//     const users = await res.json();
//     for(ques of Questions) {
//       //console.log(`Got ques with id: ${user.id}, name: ${user.name}`);
//       testInput = ques.sampleInput;
//       console.log(testInput);
//       testOutput = ques.sampleOutput;
//       console.log(testOutput);

//     }
//   } catch (err) {
//     console.log(err.message); //can be console.error
//   }
// })();

module.exports = submitRouter;