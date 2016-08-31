const ErrorStore = require("../stores/error_store");

const SessionApiUtil = {
  signup (user, success, error) {
    $.ajax({
      url: '/api/users',
      method: 'POST',
      data: { user },
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error("signup", errors);
      }
    });
  },

  login (user, success, setErrors) {
    $.ajax({
      url: '/api/session',
      method: 'POST',
      data: { user },
      success,
      error(xhr) {
        console.log("Login error in SessionApiUtil#login");
        const errors = xhr.responseJSON;
        setErrors("login", errors);
      }
    });
  },

  logout (success, error) {
    $.ajax({
      url: '/api/session',
      method: 'DELETE',
      success,
      error: function () {
        console.log("Logout error in SessionApiUtil#logout");
      }
    });
  }
};

module.exports = SessionApiUtil;
