const SessionApiUtil = require('../util/session_api_util');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const SessionConstants = require('../constants/session_constants');
const hashHistory = require('react-router').hashHistory;
const ErrorActions = require('./error_actions');

const SessionActions = {
  signup (user) {
    SessionApiUtil.signup(
      user,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors
    );
  },

  login (user) {
    SessionApiUtil.login(
      user,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors
    );
  },

  logout () {
    SessionApiUtil.logout(
      SessionActions.removeCurrentUser,
      ErrorActions.setErrors
    );
  },

  receiveCurrentUser (currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    });
  },

  removeCurrentUser (user) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
    });
  }

};

module.exports = SessionActions;
