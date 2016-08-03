const SessionApiUtil = {
  signup (user, success, error) {
    $.ajax({
      url: '/api/users',
      method: 'POST',
      data: { user },
      success,
      error
    });
  },

  login (user, success) {
    $.ajax({
      url: '/api/session',
      method: 'POST',
      data: { user },
      success,
    });
  },

  logout (success) {
    $.ajax({
      url: '/api/session',
      method: 'DELETE',
      success,
    });
  }
};

module.exports = SessionApiUtil;
