const AnnotationApiUtil = {
  createAnnotation(annotation, trackId, receiveSingleTrack){
    $.ajax({
      url: '/api/tracks/' + trackId + '/annotations/',
      method: "POST",
      data: annotation,
      success (receivedAnnotation) {
        receiveSingleTrack(receivedAnnotation);
      }
    });
  },

  updateAnnotation(annotation, trackId, receiveSingleTrack){
    $.ajax({
      url: 'api/tracks/' + trackId + '/annotations/' + annotation.id,
      method: "PATCH",
      data: {annotation: annotation},
      success (receivedAnnotation) {
        receiveSingleTrack(receivedAnnotation);
      }
    });
  },

  destroyAnnotation(annotationId, trackId, receiveSingleTrack){
    $.ajax({
      url: 'api/tracks/' + trackId + '/annotations/' + annotationId,
      method: "DELETE",
      success (receivedData) {
        receiveSingleTrack(receivedData);
      }
    });
  }
};

module.exports = AnnotationApiUtil;
