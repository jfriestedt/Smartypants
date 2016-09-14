const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher.js');
const TrackConstants = require('../constants/track_constants');
const CommentConstants = require('../constants/comment_constants');
const VoteConstants = require('../constants/vote_constants');
const AnnotationConstants = require('../constants/annotation_constants');
const SessionStore = require('./session_store');

const TrackStore = new Store(AppDispatcher);

let _tracks = [];
let _revealedAnnotation = {};
let _yPosition = null;
let _saved = null;

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

TrackStore.removeRevealedAnnotation = () => {
  _revealedAnnotation = {};
};

TrackStore.revealedAnnotation = () => {
  return Object.assign({}, _revealedAnnotation);
};

TrackStore.yPosition = () => {
  return _yPosition;
};

const resetAllTracks = (tracks) => {
  _tracks = tracks;
};

const resetSingleTrack = (track) => {
  for (var i = 0; i < _tracks.length; i++) {
    if (_tracks[i].id === track.id) {
      _tracks[i] = track;
    }
  }
};

const addAnnotationComment = (comment) => {
  for (var i = 0; i < _tracks.length; i++) {
    for (var j = 0; j < _tracks[i].annotations.length; j++) {
      if (_tracks[i].annotations[j].id === comment.commentable_id) {
        _tracks[i].annotations[j].comments.push(comment);
      }
    }
  }
};

const addTrackComment = (comment) => {
  for (var i = 0; i < _tracks.length; i++) {
    if (comment.commentable_id === _tracks[i].id) {
      _tracks[i].comments.push(comment);
    }
  }
};

const deleteTrack = (trackId) => {
  _tracks.forEach((track, i) => {
    if (track.id === trackId) {
      _tracks.splice(i, 1);
    }
  });
};

const updateScore = (vote) => {
  const annotationId = vote.annotationId;
  for (var i = 0; i < _tracks.length; i++) {
    for (var j = 0; j < _tracks[i].annotations.length; j++) {
      if (_tracks[i].annotations[j].id === vote.annotationId) {
        _tracks[i].annotations[j].score = vote.score;
      }
      revealAnnotation(annotationId);
    }
  }
};

const revealAnnotation = (id) => {
  for (var i = 0; i < _tracks.length; i++) {
    for (var j = 0; j < _tracks[i].annotations.length; j++) {
      if (_tracks[i].annotations[j].id === id) {
        _revealedAnnotation = _tracks[i].annotations[j];
      }
    }
  }
};

const revealNewAnnotation = (newAnnotation) => {
  if (newAnnotation) { _revealedAnnotation = newAnnotation; }
};

const addYPositionToUpdatedAnnotation = (updatedAnnotation, yPosition) => {
  _revealedAnnotation[yPosition] = yPosition;
};

const saved = () => {
  return _saved;
};

const updateYPosition = (yPosition) => {
  if (yPosition) {
    _yPosition = yPosition;
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
      revealNewAnnotation(payload.track.newAnnotation);
      _saved = true;
      TrackStore.__emitChange();
      break;
    case TrackConstants.TRACK_DELETED:
      deleteTrack(payload.trackId);
      TrackStore.__emitChange();
      break;
    case CommentConstants.ANNOTATION_COMMENT_RECEIVED:
      addAnnotationComment(payload.comment);
      TrackStore.__emitChange();
      break;
    case CommentConstants.TRACK_COMMENT_RECEIVED:
      addTrackComment(payload.comment);
      TrackStore.__emitChange();
      break;
    case VoteConstants.VOTE_RECEIVED:
      updateScore(payload.vote);
      TrackStore.__emitChange();
      break;
    case AnnotationConstants.ANNOTATION_REVEALED:
      revealAnnotation(payload.id);
      TrackStore.__emitChange();
      break;
    case AnnotationConstants.ANNOTATION_REMOVED:
      removeRevealedAnnotation();
      TrackStore.__emitChange();
      break;
    case AnnotationConstants.ANNOTATION_DELETED:
      resetSingleTrack(payload.track);
      removeRevealedAnnotation();
      TrackStore.__emitChange();
      break;
    case AnnotationConstants.ANNOTATION_UPDATED:
      resetSingleTrack(payload.track);
      updateYPosition(payload.yPosition);
      revealNewAnnotation(payload.track.newAnnotation);
      _saved = true;
      TrackStore.__emitChange();
      break;
    case AnnotationConstants.ANNOTATION_CREATED:
      resetSingleTrack(payload.track);
      updateYPosition(payload.yPosition);
      revealNewAnnotation(payload.track.newAnnotation);
      _saved = true;
      TrackStore.__emitChange();
      break;
  }
};

module.exports = TrackStore;
