## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * NavBar
    * LoginForm
    * SignupForm
  * **TrackForm**
  * **TracksIndex**
    * TrackIndexItem
  * **TrackShow**
    * PrimaryColumn
      * TrackLyrics
      * AnnotationReferent
      * **TrackCommentForm**
      * TrackCommentIndex
    * SecondaryColumn
      * AnnotationContainer
        * AnnotationBeginButton
        * **AnnotationForm**
        * AnnotationContent
          * AnnotationHeader
          * AnnotationBody
          * AnnotationButtonGroup
            * AnnotationEditButton
            * **AnnotationDeleteButton**
        * **AnnotationCommentForm**
        * AnnotationCommentIndex
          * AnnotationCommentIndexItem
        * **AnnotationVoteForm**
          * **AnnotationUpvoteButton**
          * **AnnotationDownvoteButton**
          * AnnotationScoreDisplay

## Routes

* **component:** `App` **path:** `/`
  * **component:** `TracksIndex` **path:** index
  * **component:** `TrackForm` **path:** `tracks/new`
  * **component:** `TrackPage` **path:** `tracks/:trackId`
    * **component:** `TrackCommentForm` **path:** `tracks/:trackId/comments`
    * **component:** `TrackCommentIndex` **path:** `tracks/:trackId/comments`
    * **component:** `AnnotationForm` **path:** `tracks/:trackId/annotations`
    * **component:** `AnnotationContent` **path:** `tracks/:trackId/annotations/:annotationId`
    * **component:** `AnnotationEditButton` **path:**  tracks/:trackId/annotations/:annotationId`
    * **component:** `AnnotationDeleteButton` **path:** tracks/:trackId/annotations/:annotationId`
    * **component**: `AnnotationCommentForm` **path:** `tracks/:trackId/annotations/:annotationId/comments`
    * **component**: `AnnotationCommentIndex` **path:** `tracks/:trackId/annotations/:annotationId/comments`
    * **component**: `AnnotationVoteForm` **path:** `tracks/:trackId/annotations/:annotationId`

For Routes that have no `trackId`, `TracksIndex` will render all
tracks.
