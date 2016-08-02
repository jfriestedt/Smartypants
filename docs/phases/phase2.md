# Phase 2: Tracks Model, API, and components (2 days, W2 Sa 6pm)

## Rails
### Models
* Track

### Controllers
* Api::TracksController (create, index, show, update)

(NB: I am not including a Track#delete action for users because I don't believe Genius.com supports this functionality)

### Views
* tracks/index.json.jbuilder
* tracks/show.json.jbuilder

## Flux
### Views (React Components)
* TracksIndex
  - TrackIndexItem
* TrackForm
* TrackPage
  - TrackBanner
    - TrackBannerImage
    - TrackBannerInfo
  - PrimaryColumn
    - TrackLyrics
  - SecondaryColumn

### Stores
* Tracks

### Actions
* `ApiActions.receiveAllTracks`
* `ApiActions.receiveSingleTrack`
    (Question: why are these first two ApiActions rather than ApiUtil methods? This is carryover from the sample proposal.)
* `TrackActions.fetchAllTracks`
* `TrackActions.fetchSingleTrack`
* `TrackActions.createTrack`
* `TrackActions.editTrack`

### ApiUtil
* `ApiUtil.fetchAllTracks`
* `ApiUtil.fetchSingleTrack`
* `ApiUtil.createTrack`
* `ApiUtil.updateTrack`

## Gems/Libraries
