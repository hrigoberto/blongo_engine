var passport = require('passport');
var mongoose = require('mongoose');
var User = require('./models/user.js');

module.exports = {
  signup: signup,
  login: login
};

function signup(req, res){
  var user = new User(req.body);
  user.setPassword(req.body.password);
  console.log(user);
  user.save(function(err){
    if(err){
      return res.status(500).json({
        msg: 'error!',
        err: err
      })
    }
    var token = user.generateJwt();
    return res.status(200).json({
      token: token,
      msg: 'success'
    })
  });
}
function login(req, res){
  passport.authenticate('local', {session: false},
   function(err, user, info){
    if(err){
      return res.status(500).json({
        msg: 'Authentication Failed'
      })
    }
    if(user){
      var token = user.generateJwt();
      return res.status(200).json({
        token: token,
        msg: 'Authentication Succeeded'
      })
    } else {
      return res.status(401).json(info);
    }
  })(req, res)
}