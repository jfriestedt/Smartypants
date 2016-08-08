const AnnotationApiUtil = {
  createAnnotation(annotation, receiveSingleAnnotation){
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
