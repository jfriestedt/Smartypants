const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher.js');
const SessionConstants = require('../constants/session_constants');
const TrackStore = require('./track_store');

const SessionStore = new Store(AppDispatcher);

let _currentUser = {};

const _login = (user) => {
  _currentUser = user;
};

const _logout = () => {
  _currentUser = {};
};

SessionStore.currentUser = () => {
  return Object.assign({}, _currentUser);
};

SessionStore.isUserLoggedIn = () => {
  return Boolean(_currentUser.id);
};

SessionStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      if (!!payload.currentUser) {
        _login(payload.currentUser);
        SessionStore.__emitChange();
      }
      break;
    case SessionConstants.LOGOUT:
      _logout();
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
