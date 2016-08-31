const TrackConstants = require('../constants/track_constants');
const TrackApiUtil = require('../util/track_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const CommentConstants = require('../constants/comment_constants');
const AnnotationConstants = require('../constants/annotation_constants');
const ErrorActions = require('../actions/error_actions');

const TrackActions = {

  fetchAllTracks () {
    TrackApiUtil.fetchAllTracks(TrackActions.receiveAllTracks);
  },

  fetchSingleTrack (trackId) {
    TrackApiUtil.fetchSingleTrack(trackId, TrackActions.receiveSingleTrack);
  },

  createTrack (track) {
    TrackApiUtil.createTrack(
      track,
      TrackActions.receiveSingleTrack,
      ErrorActions.setErrors
    );
  },

  destroyTrack (trackId) {
    TrackApiUtil.destroyTrack(trackId, TrackActions.receiveAllTracks);
  },

  receiveAllTracks (tracks) {
    AppDispatcher.dispatch({
      actionType: TrackConstants.TRACKS_RECEIVED,
      tracks: tracks
    });
  },

  receiveSingleTrack (track) {
    AppDispatcher.dispatch({
      actionType: TrackConstants.TRACK_RECEIVED,
      track: track
    });
  },

  receiveSingleTrackWithAnnotation (track, annotationId) {
    AppDispatcher.dispatch({
      actionType: AnnotationConstants.ANNOTATION_CREATED,
      track: track,
      annotationId: annotationId
    });
  },

  receiveSingleComment (comment) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.TRACK_COMMENT_RECEIVED,
      comment: comment
    });
  }
};

module.exports = TrackActions;
