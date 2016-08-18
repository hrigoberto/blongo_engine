var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var auth = require('../authentication.js')

router.get('/users/', getAllUsers);
router.get('/users/:userId', getUserById);
router.post('/signup', auth.signup);
router.post('/login', auth.login);
router.put('/users/:userId', updateUser);
router.delete('/users/:userId', deleteUser);

module.exports = router;

function getAllUsers(req, res, next){
  User.find({}, function(err, foundUsers){
    if(err){
      res.status(500).json({
        msg: err
      })
    } else {
      res.status(200).json({
        users: foundUsers
      });
    }
  });
}
function getUserById(req, res, next){
  User.findOne({_id: req.params.userId}, req.body, function (err, foundUser){
    if(err){
      res.status(500).json({
        msg: err
      })
    } else {
      res.status(200).json({
        user: foundUser
      })
    }
  })
}
function createUser(req, res, next){
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    email: req.body.email
  });
  user.save(function(err, newUser){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(201).json({
        user: newUser
      })
    }
  });
}
function updateUser(req, res, next){
  User.findOneAndUpdate({_id: req.params.userId}, req.body, function(err, oldUser){
    if(err){
      res.status(500).json({

      });
    } else {
      res.status(200).json({
        oldUser: oldUser
      });
    }
  })
}
function deleteUser(req, res, next){
  User.remove({_id: req.params.userId}, function(err, foundUser){
    if(err){
      res.status(500).json({
        msg: err
      })
    } else {
      res.status(200).json({
        msg: 'delete successful'
      })
    }
  })
}
