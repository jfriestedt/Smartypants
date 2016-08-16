const AnnotationApiUtil = {
  createAnnotation(annotation, trackId, receiveSingleTrack){
    $.ajax({
      url: '/api/tracks/' + trackId + '/annotations/',
      method: "POST",
      data: annotation,
      success (receivedTrack) {
        receiveSingleTrack(receivedTrack);
      }
    });
  },

  updateAnnotation(annotation, trackId, yPosition, receiveTrackWithUpdatedAnnotation){
    $.ajax({
      url: 'api/tracks/' + trackId + '/annotations/' + annotation.id,
      method: "PATCH",
      data: {annotation: annotation},
      success (receivedAnnotation) {
        receiveTrackWithUpdatedAnnotation(receivedAnnotation, yPosition);
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
