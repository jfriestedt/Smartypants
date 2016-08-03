const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher.js');
const SessionConstants = ('../constants/session_constants');

const SessionStore = new Store(AppDispatcher);

let _currentUser = {};

const _login = (user) => {
  _currentUser = user;

  SessionStore.__emitChange();
};

const _logout = () => {
  _currentUser = {};

  SessionStore.__emitChange();
};

SessionStore.currentUser = () => {
  return Object.assign({}, _currentUser);
};

SessionStore.isUserLoggedIn = () => {
  return (_currentUser.id ? true : false);
};

SessionStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _logout();
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
