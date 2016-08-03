const SessionApiUtil = require('../util/session_api_util');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const SessionConstants = require('../constants/session_constants');
const hashHistory = require('react-router').hashHistory;

const SessionActions = {
  signup (user) {
    SessionApiUtil.signup(
      user,
      SessionActions.receiveCurrentUser
      // error
    );
  },

  login (user) {
    SessionApiUtil.login(
      user,
      SessionActions.receiveCurrentUser
      // error
    );
  },

  logout () {
    SessionApiUtil.logout(
      SessionActions.removeCurrentUser
      // error
    );
  },

  receiveCurrentUser (currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: { currentUser }
    });
  },

  removeCurrentUser (user) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
    });
  }

};

module.exports = SessionActions;
