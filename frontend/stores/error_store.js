const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher.js');
const ErrorConstants = require('../constants/error_constants');

const ErrorStore = new Store(AppDispatcher);

let _form = "";
let _errors = [];

ErrorStore.errors = function (form) {
  if (form !== _form) {
    return {};
  }

  var result = {};

  var errors;
  Object.keys(_errors).forEach(function (field) {
    errors = _errors[field];
    result[field] = errors.slice();
  });

  return result;
};

ErrorStore.form = function () {
  return _form.slice();
};

ErrorStore.setErrors = (form, errors) => {
  _form = form;
  _errors[form] = errors;
};

ErrorStore.clearErrors = (form, errors) => {
  _form = "";
  _errors = [];
};

ErrorStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      ErrorStore.setErrors(payload.form, payload.errors);
      ErrorStore.__emitChange();
      break;
    case ErrorConstants.CLEAR_ERRORS:
      ErrorStore.clearErrors();
      ErrorStore.__emitChange();
      break;
  }
};

module.exports = ErrorStore;
