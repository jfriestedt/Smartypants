const AnnotationApiUtil = {
  createAnnotation(annotation, trackId, yPosition, receiveTrackWithNewAnnotation){
    $.ajax({
      url: '/api/tracks/' + trackId + '/annotations/',
      method: "POST",
      data: annotation,
      success (receivedTrack) {
        receiveTrackWithNewAnnotation(receivedTrack, yPosition);
      }
    });
  },

  updateAnnotation(annotation, trackId, yPosition, receiveTrackWithUpdatedAnnotation){
    $.ajax({
      url: 'api/tracks/' + trackId + '/annotations/' + annotation.id,
      method: "PATCH",
      data: {annotation: annotation},
      success (receivedTrack) {
        receiveTrackWithUpdatedAnnotation(receivedTrack, yPosition);
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
