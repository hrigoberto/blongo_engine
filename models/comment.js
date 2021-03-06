var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  // author: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'User'
  // },
  author: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    required: true
  },
  updated: {
    type: Date,
    required: true
  },
  post: {
    type: String,
    required: true
  }
  // post: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'Post'
  // }
});

commentSchema.pre('findOneAndUpdate', function(){
  this.update({}, { $set: {updated: new Date()}})
});

var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
