const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher.js');
const ErrorConstants = ('../constants/error_constants');

const ErrorStore = new Store(AppDispatcher);

let _form = "";
let _errors = [];

ErrorStore.errors = (form) => {
  if (form === _form) {
    return _errors.slice();
  }
};

const _setErrors = (form, errors) => {
  _form = form;
  _errors = errors;
};

const _clearErrors = (form, errors) => {
  _form = "";
  _errors = [];
};

ErrorStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      _setErrors(payload.form, payload.errors);
      ErrorStore.__emitChange();
      break;
    case ErrorConstants.CLEAR_ERRORS:
      _clearErrors();
      ErrorStore.__emitChange();
      break;
  }
};
