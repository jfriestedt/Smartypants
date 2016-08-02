const SessionApiUtil = {
  signUp (user, success, error) {
    $.ajax({
      url: '/api/users',
      method: 'POST',
      data: { user },
      success,
      error
    });
  },

  login (user, success, error) {
    $.ajax({
      url: '/api/session',
      method: 'POST',
      data: { user },
      success,
      error
    });
  },

  logout (success, error) {
    $.ajax({
      url: '/api/session',
      method: 'DELETE',
      success,
      error
    });
  }
};

module.exports = SessionApiUtil;
