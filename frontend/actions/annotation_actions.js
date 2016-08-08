const AnnotationConstants = require('../constants/track_constants');
const AnnotationApiUtil = require('../util/track_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');

const AnnotationActions = {

  fetchSingleAnnotation (annotationId) {
    AnnotationApiUtil.fetchSingleAnnotation(
      annotationId,
      AnnotationActions.receiveSingleAnnotation
    );
  },

  createAnnotation (annotation) {
    AnnotationApiUtil.createAnnotation(
      annotation,
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
