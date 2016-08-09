# Smartypants

[Heroku link][heroku]

[heroku]: https://smartypants-app.herokuapp.com/

## Minimum Viable Product

Smartypants is a single-page web application clone of Genius.com, a site which allows users to view and collaboratively annotate lyrics to popular songs. By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [x] Tracks
  - [x] Smooth, bug-free navigation
  - [x] Adequate seed data to demonstrate the site's features
  - [x] Adequate CSS styling
- [ ] Annotations
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Comments
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Upvotes
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days, W1 W 6pm)

**Objective:** Functioning rails project with front-end Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication backend setup
- [x] create `StaticPages` controller and root view
- [x] set up webpack & flux architecture with skeleton files
- [x] setup `APIUtil` to interact with the API
- [x] set up flux cycle for frontend authorization
- [x] user signup/signin "splash page" components
- [x] nav bar component
- [x] implement React Router
- [x] style signin/signup components
- [x] seed users

### Phase 2: Tracks Model, API, and components (2 days, W2 F 6pm)

**Objective:** Tracks can be created, read, edited and destroyed through
the API.

- [x] create `Track` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for tracks (`TracksController`)
- [x] jBuilder views for tracks
- [x] test out API interaction in the console.
- implement each track component, building out the flux loop as needed.
  - [x] `TracksIndex`
  - [x] `TrackIndexItem`
  - [x] `TrackForm`
  - [x] `TrackShow`
    - [x] `TrackBanner`
  - [x] add navigation between tracks index & track show views
- [x] style track components
- [x] implement file upload & track images
- [x] seed tracks

### Phase 3: Annotations (3 days, W2 W 6pm)

**Objective:** Tracks can be annotated by users. Sections of track lyrics can be highlighted and made into referents which refer to annotations. After creation, annotations will appear and disappear beside their referents when referents are selected and unselected.

- [x] create `Annotation` model and join table
- [x] build out API, Flux loop, and components for Annotation CRUD
- implement each annotation component, building out the flux loop as needed.
  - [ ] `AnnotationReferent`
  - [x] `AnnotationContainer`
  - [x] `AnnotationForm`
  - [x] `AnnotationBody`
- [ ] style annotation components
- [ ] seed annotations

Phase 3 will be the most difficult and time-consuming phase of the project. It builds the key functionality of the site, and therefore, its full completion will take precedence over building of later features in the event of a time issue.

### Phase 4: Comments (1 day, W2 R 6pm)

**Objective:** Users can create, edit, and delete comments for tracks and annotations.

- [ ] create `TrackComment` & `AnnotationComment` models and join tables
- build out API, Flux loop, and components for:
  - [ ] displaying comments on tracks
  - [ ] adding comments to tracks
  - [ ] editing comments on tracks
  - [ ] deleting comments from tracks
  - [ ] displaying comments on annotations
  - [ ] adding comments to annotations
  - [ ] editing comments on annotations
  - [ ] deleting comments from annotations
- [ ] style comment elements
- [ ] seed comments

### Phase 5: Upvotes & Downvotes (1 day, W2 F 6pm)

**objective:** Users can upvote and downvote annotations. Annotations will display their cumulative up/down score.

- [ ] create `AnnotationScore` & model and `UserScore` join table
- build out API, Flux loop, and components for:
  - [ ] displaying upvote & downvote buttons under annotations
  - [ ] adding one point (maximum) per voter/annotation via upvote
  - [ ] subtracting one point (maximum) per voter/annotation via downvote
      (NB: creating an upvote on an annotation after creating a downvote will remove the downvote and add the upvote, and vice versa.)
- [ ] style upvote & downvote elements
- [ ] seed upvotes & downvotes

### Bonus Features (TBD)
- [ ] Add genre tags to tracks
- [ ] Add site-wide track & lyrics search
- [ ] Add extended track info to Track model & Track#show secondary column
- [ ] Add albums, associate tracks with albums
- [ ] Add User profiles
- [ ] Add user 'smartyness' score, based on contributed annotations, comments, and up/downvotes

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
