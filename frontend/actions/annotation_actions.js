const AnnotationConstants = require('../constants/track_constants');
const AnnotationApiUtil = require('../util/annotation_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');

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
      AnnotationActions.receiveSingleAnnotation
    );
  },

  receiveSingleAnnotation (annotation) {
    AppDispatcher.dispatch({
      actionType: AnnotationConstants.ANNOTATION_RECEIVED,
      annotation: annotation
    });
  }
};

module.exports = AnnotationActions;
