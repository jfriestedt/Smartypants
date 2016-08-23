# Phase 3: Annotations (3 days, W2 W 6pm)

## Rails
### Models
* Annotation
* UserAnnotation (joined through Track)

### Controllers
* Api::AnnotationsController (create, destroy, show, update)

### Views
* annotations/show.json.jbuilder

## Flux
### Views (React Components)
* PrimaryColumn
  - AnnotationReferent
* SecondaryColumn
  - AnnotationContainer
    - AnnotationForm
    - AnnotationContent
      - AnnotationHeader
      - AnnotationBody
      - AnnotationButtonGroup
        - AnnotationBeginButton
        - AnnotationEditButton
        - AnnotationDeleteButton

### Stores
* Annotations

### Actions
* `ApiActions.receiveSingleAnnotation`
* `ApiActions.deleteAnnotation`
* `AnnotationActions.fetchSingleAnnotation`
* `AnnotationActions.createAnnotation`
* `AnnotationActions.editAnnotation`
* `AnnotationActions.destroyAnnotation`

### ApiUtil
* `ApiUtil.fetchSingleAnnotation`
* `ApiUtil.createAnnotation`
* `ApiUtil.editAnnotation`
* `ApiUtil.destroyAnnotation`

## Gems/Libraries
