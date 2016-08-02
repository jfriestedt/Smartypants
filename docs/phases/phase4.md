### Phase 4: Comments (1 day, W2 R 6pm)

## Rails

### Models
* Comment
* AnnotationCommenting (joins user and comment through annotation)
* TrackCommenting (joins user and comment through track)

### Controllers
* Api::CommentsController (index, create, destroy, update)

### Views
* comments/index.json.jbuilder
* comments/show.json.jbuilder

## Flux
### Views (React Components)
* PrimaryColumn
  - TrackCommentForm
  - TrackCommentIndex
    - TrackCommentIndexItem
* SecondaryColumn
  - AnnotationCommentForm
  - AnnotationCommentIndex
    - AnnotationCommentIndexItem

### Stores
* Comments

### Actions
* `ApiActions.receiveAllTrackComments`
* `ApiActions.receiveAllAnnotationComments`
* `ApiActions.deleteTrackComment`
* `ApiActions.deleteAnnotationComment`

* `TrackCommentActions.fetchTrackComments`
* `TrackCommentActions.createTrackComment`
* `TrackCommentActions.editTrackComment`
* `TrackCommentActions.destroyTrackComment`

* `AnnotationCommentActions.fetchAnnotationComments`
* `AnnotationCommentActions.createAnnotationComment`
* `AnnotationCommentActions.editAnnotationComment`
* `AnnotationCommentActions.destroyAnnotationComment`

## Gems/Libraries
