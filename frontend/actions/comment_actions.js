const CommentApiUtil = require('../util/comment_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const TrackActions = require('./track_actions');
const AnnotationActions = require('./annotation_actions');

const CommentActions = {
  createComment (comment) {
    if (comment.commentable_type === "Annotation") {
      this.createAnnotationComment(comment);
    } else if (comment.commentable_type === "track") {
      this.createTrackComment(comment);
    }
  },

  createAnnotationComment (comment) {
    CommentApiUtil.createAnnotationComment(
      comment,

      AnnotationActions.receiveSingleComment
    );
  },

  createTrackComment (comment) {
    CommentApiUtil.createTrackComment(
      comment,

      TrackActions.receiveSingleComment
    );
  }
};

module.exports = CommentActions;
