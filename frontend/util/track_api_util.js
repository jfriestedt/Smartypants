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

  createTrack(track, receiveSingleTrack){
    $.ajax({
      url: '/api/tracks/',
      method: "POST",
      data: {track: track},
      success (receivedTrack) {
        receiveSingleTrack(receivedTrack);
      }
    });
  }
};

module.exports = TrackApiUtil;
