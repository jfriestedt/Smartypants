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
  }
};

module.exports = AnnotationApiUtil;
