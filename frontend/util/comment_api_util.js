const CommentApiUtil = {
  createAnnotationComment(comment, cb){
    $.ajax({
      url: '/api/comments',
      method: "POST",
      data: {comment},
      success (receivedAnnotationComment) {
        cb(receivedAnnotationComment);
      }
    });
  },

  createTrackComment(comment, cb){
    $.ajax({
      url: 'api/comments',
      method: "POST",
      data: {comment},
      success (receivedTrackComment) {
        cb(receivedTrackComment);
      }
    });
  }
};

module.exports = CommentApiUtil;
