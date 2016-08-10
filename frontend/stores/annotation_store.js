const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher.js');
const AnnotationConstants = require('../constants/annotation_constants');

const AnnotationStore = new Store(AppDispatcher);

let _annotations = [];

AnnotationStore.all = () => {
  return _annotations.slice();
};

AnnotationStore.find = (annotationId) => {
  for (var i = 0; i < _annotations.length; i++) {
    if (_annotations[i].id === annotationId) {
      return _annotations[i];
    }
  }
};

const resetSingleAnnotation = (annotation) => {
  for (var i = 0; i < _annotations.length; i++) {
    if (_annotations[i].id === annotation.id) {
      _annotations.splice(i, 1);
    }
  }
  debugger;
  _annotations.push(annotation);
};

AnnotationStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case AnnotationConstants.ANNOTATION_RECEIVED:
      resetSingleAnnotation(payload.annotation);
      AnnotationStore.__emitChange();
      break;
  }
};

module.exports = AnnotationStore;
