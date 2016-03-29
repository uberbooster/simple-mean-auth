var express = require('express');
var router = express.Router();
var passport = require('passport');

var User = require('../models/user.model.js');


router.post('/register', function(req, res) {
  //registration route for signing up users
});

router.post('/login', function(req, res, next) {
  //login route for logging in existing users
  // What do you notice about this function?
});

router.get('/logout', function(req, res) {
  //Logout route
});

router.get('/status', function(req, res) {
  //Why do we need a status route?
});


module.exports = router;
