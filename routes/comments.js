var express = require('express');
var router = express.Router();

router.get('/comments/:postId', getCommentsForAPost);
router.post('/comments', createComment);
router.delete('/comments/:commentId', deleteComment);
router.put('/comments/:commentId', updateComment);

module.exports = router;

function getCommentsForAPost(req, res, next){
  console.log('getting all of the comments');
  next();
}
function createComment(req, req, next){
  console.log('creating a comment');
  next();
}
function deleteComment(req, req, next){
  console.log('deleting a comment');
  next();
}
function updateComment(req, req, next){
  console.log('updating a comment');
  next();
}
