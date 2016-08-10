const AnnotationApiUtil = require('../util/annotation_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const TrackActions = require('./track_actions');

const AnnotationActions = {
  fetchSingleAnnotation (annotationId) {
    AnnotationApiUtil.fetchSingleAnnotation(
      annotationId,
      AnnotationActions.receiveSingleAnnotation
    );
  },

  createAnnotation (annotation, trackId) {
    AnnotationApiUtil.createAnnotation(
      annotation,
      trackId,
      TrackActions.receiveSingleTrack
    );
  }
};

module.exports = AnnotationActions;
