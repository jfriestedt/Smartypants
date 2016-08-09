const AnnotationApiUtil = {
  createAnnotation(annotation, trackId, receiveSingleAnnotation){
    $.ajax({
      url: '/api/tracks/' + trackId + '/annotations/',
      method: "POST",
      data: annotation,
      success (receivedAnnotation) {
        receiveSingleAnnotation(receivedAnnotation);
      }
    });
  }
};

module.exports = AnnotationApiUtil;
