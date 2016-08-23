# Flux Cycles

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `NavBar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `NavBar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. stores in `_currentUser` in `CurrentUserStore`
* `removeCurrentUser`
  0. invoked from an API callback
  0. removes `_currentUser` in `CurrentUserStore`

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. sets `form` and `_errors` in the `ErrorStore`
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. removes `_errors` for a given `form` in the `ErrorStore`

## Track Cycles

### Tracks API Request Actions

* `fetchAllTracks`
  0. invoked from `TracksIndex` `didMount`/`willReceiveProps`
  0. `GET /api/tracks` is called.
  0. `receiveAllTracks` is set as the success callback.

* `createTrack`
  0. invoked from `TrackForm` `onSubmit`
  0. `POST /api/tracks` is called.
  0. `receiveSingleTrack` is set as the success callback.

* `fetchSingleTrack`
  0. invoked from `TrackPage` `didMount`/`willReceiveProps`
  0. `GET /api/tracks/:id` is called.
  0. `receiveSingleTrack` is set as the success callback.

* `updateTrack`
  0. invoked from `TrackForm` `onSubmit`
  0. `POST /api/tracks/:id` is called.
  0. `receiveSingleTrack` is set as the success callback.

### Tracks API Response Actions

* `receiveAllTracks`
  0. invoked from an API callback.
  0. `Track` store updates `_tracks` and emits change.

* `receiveSingleTrack`
  0. invoked from an API callback.
  0. `Track` store updates `_tracks[id]` and emits change.

### Store Listeners

* `TracksIndex` component listens to `Track` store.
* `TrackPage` component listens to `Track` store.

## Annotation Cycles

### Annotations API Request Actions

* `createAnnotation`
  0. invoked from `AnnotationForm` `onSubmit`
  0. `POST /api/tracks/:id/annotations` is called.
  0. `receiveSingleAnnotation` is set as the callback.

* `fetchSingleAnnotation`
  0. invoked from `AnnotationContainer` `didMount`/`willReceiveProps`
  0. `GET /tracks/:id/annotations/:id` is called.
  0. `receiveSingleAnnotation` is set as the success callback.

* `updateAnnotation`
  0. invoked from `AnnotationForm` `onSubmit`
  0. `POST /api/notebooks` is called.
  0. `receiveSingleAnnotation` is set as the success callback.

* `destroyAnnotation`
  0. invoked from `AnnotationDeleteButton` `onClick`
  0. `DELETE /api/tracks/:id/annotations/:id` is called.
  0. `removeAnnotation` is set as the success callback.

### Annotations API Response Actions

* `receiveSingleAnnotation`
  0. invoked from an API callback.
  0. `Annotation` store updates `_annotations[id]` and emits change.

* `removeAnnotation`
  0. invoked from an API callback.
  0. `Annotation` store removes `_annotations[id]` and emits change.

### Store Listeners

* `AnnotationContainer` component listens to `Annotation` store.

## Comment Cycles

### Comments API Request Actions

* `fetchTrackComments`
  0. invoked from `TrackPage` `didMount`/`willReceiveProps`
  0. `GET /api/tracks/:id/comments` is called
  0. `receiveTrackComments` is set as the success callback.

* `createTrackComment`
  0. invoked from `TrackCommentForm` `onSubmit`
  0. `POST /api/tracks/:id/comments` is called
  0. `receiveTrackComments` is set as the success callback.

* `deleteTrackComment`
  0. invoked from delete button in `TrackCommentIndexItem` `onClick`
  0. `DELETE /api/tracks/:id/comments/:id` is called
  0. `removeTrackComment` is set as the success callback.

* `fetchAnnotationComments`
  0. invoked from `AnnotationContainer` `didMount`/`willReceiveProps`
  0. `GET /api/tracks/:id/annotation/:id/comments` is called
  0. `receiveAnnotationComments` is set as the success callback.

* `createAnnotationComment`
  0. invoked from `AnnotationCommentForm` `onSubmit`
  0. `POST /api/tracks/:id/annotations/:id/comments` is called
  0. `receiveAnnotationComments` is set as the success callback.

* `deleteTrackComment`
  0. invoked from delete button in `AnnotationCommentIndexItem` `onClick`
  0. `DELETE /api/tracks/:id/annotations/:id/comments/:id` is called
  0. `removeAnnotationComment` is set as the success callback.

### Comments API Response Actions

* `receiveTrackComments`
  0. invoked from an API callback.
  0. `TrackComments` store updates `_trackcomments` and emits change.

* `receiveAnnotationComments`
  0. invoked from an API callback.
  0. `AnnotationComments` store updates `_annotationcomments` and emits change.

* `removeTrackComment`
  0. invoked from an API callback.
  0. `TrackComments` store removes `_trackcomments[:id]` and emits change.

* `removeAnnotationComment`
  0. invoked from an API callback.
  0. `AnnotationComments` store removes `_annotationcomments[:id]` and emits change.

### Store Listeners

* `TrackCommentIndex` component listens to `TrackComments` store.
* `AnnotationCommentIndex` component listens to `AnnotationComments` store.

## Upvote & Downvote Cycles

### Votes API Request Actions

* `createUpvote`
  0. invoked from the upvote button in `AnnotationVoteForm` `onClick`
  0. `POST /api/tracks/:id/annotations/:id` is called
  0. `receiveSingleAnnotation` is set as the success callback

* `createDownvote`
  0. invoked from the downvote button in `AnnotationVoteForm` `onClick`
  0. `POST /api/tracks/:id/annotations/:id` is called
  0. `receiveSingleAnnotation` is set as the success callback
