const React = require('react');
const TrackStore = require('../../stores/track_store');
const TrackActions = require('../../actions/track_actions');
const TrackLyrics = require('./track_lyrics');
const AnnotationContainer = require('../annotations/annotation_container');

const TrackShow = React.createClass ({
  getInitialState () {
    return this.getStateFromStore();
  },

  getStateFromStore () {
    return {
       track: TrackStore.find(parseInt(this.props.params.trackId)),
       annotation: {},
      };
  },

  componentDidMount () {
    this.trackListener = TrackStore.addListener(this._onChange);
    TrackActions.fetchSingleTrack(parseInt(this.props.params.trackId));
  },

  componentWillUnmount () {
    this.trackListener.remove();
  },

  componentWillReceiveProps (newProps) {
    TrackActions.fetchSingleTrack(parseInt(newProps.params.trackId));
  },

  _onChange () {
    this.setState(this.getStateFromStore());
  },

  displayAnnotation (stuff) {
    this.setState({
      annotation: {
        stuff: stuff
      }
    });
  },

  sendAnnotation (e) {
    if(document.getSelection().toString().length === 0) {
      this.setState({
        annotation: {}
      });
      return;
    }

    let startIndex = document.getSelection().anchorOffset;
    let endIndex = document.getSelection().focusOffset;

    if (startIndex > endIndex) {
      startIndex = [endIndex, endIndex = startIndex][0];
    }

    const selection = this.state.track.lyrics.slice(startIndex, endIndex);

    const annotation = {
      annotationContainerRevealed: true,
      annotationButtonRevealed: true,
      annotationFormRevealed: false,
      annotationShowRevealed: false,
      startIndex: startIndex,
      endIndex: endIndex,
      selection: selection,
      yPosition: e.pageY
    };

    this.setState({
      annotation: annotation
    });
  },

  annotationContainer () {
    if (!this.state.annotation.annotationContainerRevealed) {
      return;
    } else {
      return <AnnotationContainer annotation={this.state.annotation}/>;
    }
  },

  render () {
    let trackInfo = <hgroup className="track-show-title-artist-inset">
                      <h1>Loading...</h1>
                    </hgroup>;
    let trackAlbum = <span></span>;
    let trackLyrics = <span className="track-lyrics">
                        Loading...
                      </span>;
    let trackImg    = <img></img>;
    if (this.state.track) {
      if (this.state.track.album) {
        trackAlbum = <h3>Album: {this.state.track.album}</h3>;
      }
      trackInfo = <hgroup className="track-show-title-artist-inset">
                    <h1>{this.state.track.title}</h1>
                    <h2>{this.state.track.artist}</h2>
                    {trackAlbum}
                  </hgroup>;
      trackLyrics = <TrackLyrics
                      track={this.state.track}
                      sendAnnotation={this.sendAnnotation}
                      removeAnnotation={this.removeAnnotation}
                    />;
      trackImg = <img src={this.state.track.image_url}></img>;
    }

    return (
      <div className="track-show">
        <div className="track-banner">
          <div className="track-banner-img-container">
            {trackImg}
          </div>
          <span className="track-banner-overlay"></span>
          <div className="track-banner-content">
            {trackInfo}
            {trackAlbum}
          </div>
        </div>
        <div className="track-columns-container">
          <div className="track-show-primary-column">
            {trackLyrics}
          </div>
          <div className="track-show-secondary-column">
            {this.annotationContainer()}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TrackShow;
