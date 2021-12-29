const express = require('express');
var request = require("request");

const compileRouter = express.Router();

var authenticate = require('../authenticate');

compileRouter.use(express.json());


compileRouter.post("/", authenticate.verifyUser, (req, res) => {    
    let codeBody = [];
    req
      .on("data", chunk => {
        codeBody.push(chunk);
      })
      .on("end", () => {
        codeBody = Buffer.concat(codeBody).toString();
        console.log("bodyObj")
        bodyObj = JSON.parse(codeBody);
        console.log(bodyObj);
        let code = bodyObj.code.toString();
        let language = bodyObj.language.toString();
        let inputs = "";
        if(bodyObj.standardIn){
          inputs = bodyObj.standardIn.toString();
        }
        //let inputs = bodyObj.standardIn.toString();
        console.log("Enter into function2");
        var program = {
          script: code,
          language: language,
          stdin: inputs,
          versionIndex: "0",
          clientId: "1a06c1f835ba9b2ccf218d8fe381182d",
          clientSecret:
            "3762082933511c0ad39b8ba3908d45accbefaf946c38dd88161758185dc9dbec"
          // headers: {
          //     'Authorization': `Bearer ${authenticate.getToken}`
          // }
        };
        //console.log(usersRouter.getToken);
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
            console.log(body.output);
            
            res.json(body);
          }
           
        );
      });
  });

  module.exports = compileRouter;