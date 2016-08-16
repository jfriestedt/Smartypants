const AnnotationApiUtil = require('../util/annotation_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const TrackActions = require('./track_actions');
const CommentConstants = require('../constants/comment_constants');
const AnnotationConstants = require('../constants/annotation_constants');

const AnnotationActions = {
  createAnnotation (annotation, trackId, cb) {
    AnnotationApiUtil.createAnnotation(
      annotation,
      trackId,
      TrackActions.receiveSingleTrack
    );
  },

  updateAnnotation (annotation, trackId, yPosition) {
    AnnotationApiUtil.updateAnnotation(
      annotation,
      trackId,
      yPosition,
      // TrackActions.receiveSingleTrack
      AnnotationActions.receiveTrackWithUpdatedAnnotation
    );
  },

  receiveTrackWithUpdatedAnnotation (track, yPosition) {
    AppDispatcher.dispatch({
      actionType: AnnotationConstants.ANNOTATION_UPDATED,
      track: track,
      yPosition: yPosition
    });
  },

  destroyAnnotation (annotationId, trackId) {
    AnnotationApiUtil.destroyAnnotation(
      annotationId,
      trackId,
      // TrackActions.receiveSingleTrack
      AnnotationActions.receiveTrackWithDeletedAnnotation
    );
  },

  receiveTrackWithDeletedAnnotation (track) {
    AppDispatcher.dispatch({
      actionType: AnnotationConstants.ANNOTATION_DELETED,
      track: track
    });
  },

  receiveSingleComment (comment) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.ANNOTATION_COMMENT_RECEIVED,
      comment: comment
    });
  },

  setRevealedAnnotation (id) {
    AppDispatcher.dispatch({
      actionType: AnnotationConstants.ANNOTATION_REVEALED,
      id: id
    });
  },

  removeRevealedAnnotation () {
    AppDispatcher.dispatch({
      actionType: AnnotationConstants.ANNOTATION_REMOVED
    });
  }
};

module.exports = AnnotationActions;
