const express = require('express');

const profileRouter = express.Router();

var authenticate = require('../authenticate');

profileRouter.use(express.json());

profileRouter.route('/')
.get(authenticate.verifyUser, (req,res) => {
    //console.log(req.user);

    // sending the user data
    res.send(req.user);
})


module.exports = profileRouter;