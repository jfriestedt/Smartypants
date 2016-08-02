const SessionApiUtil = {
  signUp (user, success, error) {
    $.ajax({
      url: "/api/user",
      method: "POST",
      dataType: 'json',
      data: { user },
      success,
      error
    });
  },

  login () {

  },

  logout () {

  }
};

module.exports = SessionApiUtil;
