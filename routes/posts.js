var express = require('express');
var router = express.Router();

router.get('/posts/', getAllPosts);
router.post('/posts', createPost);
router.get('/posts/:id', getPost);
router.delete('/posts/:id', deletePost);
router.put('/posts/:id', updatePost);

module.exports = router;

function getAllPosts(req, res, next){
  console.log('getting all of the posts');
  next();
}
function createPost(req, res, next){
  console.log('creating a post');
  next();
}
function getPost(req, res, next){
  console.log('getting a post');
  next();
}
function deletePost(req, res, next){
  console.log('deleting a post');
  next();
}
function updatePost(req, res, next){
  console.log('updating a post');
  next();
}
