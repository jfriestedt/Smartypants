const AnnotationApiUtil = {
  //

  fetchAnnotationTrack (annotationId, receiveSingleAnnotation) {
    $.ajax({
      url: '/api/annotations/' + annotationId,
      success (receivedAnnotation) {
        receiveSingleAnnotation(receivedAnnotation);
      }
    });
  },

  createTrack(annotation, receiveSingleAnnotation){
    $.ajax({
      url: '/api/annotations/',
      method: "POST",
      data: annotation,
      success (receivedAnnotation) {
        receiveSingleAnnotation(receivedAnnotation);
      }
    });
  }
};

module.exports = AnnotationApiUtil;
