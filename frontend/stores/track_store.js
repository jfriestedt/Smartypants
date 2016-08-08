const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher.js');
const TrackConstants = require('../constants/track_constants');

const TrackStore = new Store(AppDispatcher);

let _tracks = [];

TrackStore.all = () => {
  return _tracks.slice();
};

TrackStore.find = (trackId) => {
  for (var i = 0; i < _tracks.length; i++) {
    if (_tracks[i].id === trackId) {
      return _tracks[i];
    }
  }
};

const resetAllTracks = (tracks) => {
  _tracks = tracks;
};

const resetSingleTrack = (track) => {
  for (var i = 0; i < _tracks.length; i++) {
    if (_tracks[i] === track) {
      _tracks.splice(i, 1);
      _tracks.push(track);
    }
  }
};

TrackStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case TrackConstants.TRACKS_RECEIVED:
      resetAllTracks(payload.tracks);
      TrackStore.__emitChange();
      break;
    case TrackConstants.TRACK_RECEIVED:
      resetSingleTrack(payload.track);
      TrackStore.__emitChange();
      break;
  }
};

module.exports = TrackStore;
