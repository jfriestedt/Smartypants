const TrackApiUtil = {
  //

  fetchAllTracks (receiveAllTracks) {
    $.ajax({
      url: '/api/tracks',
      success (receivedTracks) {
        receiveAllTracks(receivedTracks);
      }
    });
  }
};

module.exports = TrackApiUtil;
