# Smartypants

[Live Site][heroku]

[heroku]: http://smartypants.jonfriestedt.com/

Smartypants is a single-page web app clone of Genius.com, a site which allows users to view and collaboratively annotate lyrics to popular songs. Smartypants is built using Ruby on Rails on the backend and React.js / Flux on the frontend.

## Features & Implementation

### Authorization
![auth]

Users on Smartypants can sign up for accounts on the site - their accounts are created and validated using a custom authentication system that uses the BCrypt gem for encryption.

### Tracks

#### Creating a Track
![add-song]

Users can create tracks by navigating to a track creation route from the nav bar. Tracks require an artist, a title, and lyrics. They also take an optional album name and track image. Images are uploaded via the Paperclip gem and stored remotely via AWS S3 cloud storage.

#### Viewing Tracks
![track-show]

Once a track is created, it will be displayed as a clickable index item on the homepage.

<!-- Track show preview [x] -->
When a track is clicked on from the homepage or navigated to, a component will render displaying all that track's stored information. On this page, annotations, comments, & annotation votes can be referenced and created.

### Annotations
![annotation-show]

Annotations are the primary CRUD resource of Smartypants. Users can create, edit, and destroy their annotations. Anyone using Smartypants, whether logged in or not, can view annotations.

#### Creating an Annotation
![annotation-button]

Users can create annotations by highlighting and unannotated section of lyrics on a track. A button will appear to the right of the selected lyrics, prompting the user to click through to begin annotation on the lyric.

By the time the button has appeared, almost all of the information needed to display the button in the right place and eventually create an annotation has been collected:

```javascript
revealAnnotationShow (e) {
  e.preventDefault();

  const track = this.state.track;

  let annotationId = parseInt(e.currentTarget.id);
  let annotation = this.findAnnotationById(annotationId);
  annotation.yPosition = e.pageY;
  let annotationBody = annotation.body;
  let yPosition = e.pageY;

  AnnotationActions.setRevealedAnnotation(annotationId);

  this.setState({
    annotation: annotation,
    focused: parseInt(e.currentTarget.id),
  });
}
```

Here, we see that the element containing a track's lyrics has a mouseup event listener installed. This DOM event carries, among other things, a pageY property that gives a reference to a y-coordinate relative to the dimensions of a parent HTML element. Smartypants uses this pageY to inform where an annotation component should appear on the page.

Annotations store a start-index and end-index which refer to indices in their parent track's lyrics. The snippet of lyrics bound by these indices is the lyric the annotation refers to. To get this info, we can query the DOM selection object for a an anchor node (selection start) and focus node (selection end), which is essentially what is happening here:

```javascript
const docSelection = document.getSelection();

if (docSelection.toString().length === 0 ||
    docSelection.anchorNode !== docSelection.focusNode ||
    docSelection.anchorNode.parentElement.className !== "nonreferent") {

  this.setState({
    annotation: {},
    focused: null
  });

  return;
}

let startIndex = document.getSelection().anchorOffset;
let endIndex = document.getSelection().focusOffset;
let element = document.getSelection().anchorNode.parentElement;

if (startIndex > endIndex) {
  startIndex = [endIndex, endIndex = startIndex][0];
}

const selection = this.state.track.lyrics.slice(startIndex, endIndex);

while (element.previousSibling) {
  startIndex += element.previousSibling.innerText.length;
  endIndex += element.previousSibling.innerText.length;
  element = element.previousSibling;
}

const annotation = {
  startIndex: startIndex,
  endIndex: endIndex,
  selection: selection,
  yPosition: e.pageY
};

this.setState({
  annotation: annotation,
  focused: null,
});
},

resetState () {
this.setState({
  annotation: {},
  focused: null
});

AnnotationActions.removeRevealedAnnotation();
}
```

By the time the necessary info is collected, all that is needed to complete a valid annotation is a body created by the user!

<!-- Annotation form [x]-->

### Comments
![comments]

Tracks and annotations can each be commented on in Smartypants. Because comments for each resource are identical excepting for the type of parent associated with the comment, code is kept DRY by making comments polymorphic on the backend, and giving them a common React component on the frontend.

### Votes
![votes]

Annotations can be voted up or down in Smartypants. Vote handling is largely done by a Rails controller, which requires that a given user may create only one vote per annotation. This means, for example, that a downvote that follows an upvote will remove the existing upvote and create a downvote instead, resulting in a net score change of -2 on the annotation.

### Bonus Features (TBD)

These are features I plan to implement as time allows:

* Album resource, associated with tracks and artists
* Track, artist, & album search
* Multiple contributors on annotations
* User profiles, with a "smartyness" score associated with each user based on site contributions.

[add-song]: ./docs/screenshots/add_song.png
[annotation-button]: ./docs/screenshots/annotation_button.png
[annotation-form]: ./docs/screenshots/annotation_form.png
[annotation-show]: ./docs/screenshots/annotation_show.png
[auth]: ./docs/screenshots/auth.png
[comments]: ./docs/screenshots/comments.png
[track-show]: ./docs/screenshots/track_show.png
[tracks-index]: ./docs/screenshots/tracks_index.png
[votes]: ./docs/screenshots/votes.png
