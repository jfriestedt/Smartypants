const TrackApiUtil = {
  //

  fetchAllTracks (receiveAllTracks) {
    $.ajax({
      url: '/api/tracks',
      success (receivedTracks) {
        receiveAllTracks(receivedTracks);
      }
    });
  },

  fetchSingleTrack (trackId, receiveSingleTrack) {
    $.ajax({
      url: '/api/tracks/' + trackId,
      success (receivedTrack) {
        receiveSingleTrack(receivedTrack);
      }
    });
  },

  createTrack(formData, receiveSingleTrack, setErrors){
    $.ajax({
      url: '/api/tracks/',
      method: "POST",
      contentType: false,
      processData: false,
      data: formData,
      success (receivedTrack) {
        receiveSingleTrack(receivedTrack);
      },
      error(xhr) {
        console.log("Track error in TrackApiUtil#createTrack");
        const errors = xhr.responseJSON;
        setErrors("track", errors);
      }
    });
  },

  destroyTrack(trackId, deleteTrackFromStore) {
    $.ajax({
      url: '/api/tracks/' + trackId,
      method: "DELETE",
      success (receivedTracks) {
        deleteTrackFromStore(trackId);
      }
    });
  }
};

module.exports = TrackApiUtil;
