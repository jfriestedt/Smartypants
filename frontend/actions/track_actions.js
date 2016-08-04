const TrackConstants = require('../constants/track_constants');
const TrackApiUtil = require('../util/track_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');

const TrackActions = {

  fetchAllTracks () {
    TrackApiUtil.fetchAllTracks(TrackActions.receiveAllTracks);
  },

  receiveAllTracks (tracks) {
    AppDispatcher.dispatch({
      actionType: TrackConstants.TRACKS_RECEIVED,
      tracks: tracks
    });
  }

};

module.exports = TrackActions;
