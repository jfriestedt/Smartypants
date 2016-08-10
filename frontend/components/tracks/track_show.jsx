const React = require('react');
const TrackStore = require('../../stores/track_store');
const TrackActions = require('../../actions/track_actions');
const AnnotationContainer = require('../annotations/annotation_container');

const TrackShow = React.createClass ({
  getStateFromStore () {
    return {
      track: TrackStore.find(parseInt(this.props.params.trackId)),
      annotation: {}
    };
  },

  getInitialState () {
    return this.getStateFromStore();
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

  sendAnnotation (e) {
    if (document.getSelection().toString().length === 0 ||
        document.getSelection().anchorNode !== document.getSelection().focusNode ||
        document.getSelection().anchorNode.parentElement.className !== "nonreferent") {
      this.setState({
        annotation: {}
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
      annotation: annotation
    });
  },

  annotationContainer () {
    if (!this.state.annotation.selection) {
      return;
    } else {
      return <AnnotationContainer annotation={this.state.annotation}
                                  trackId={this.props.params.trackId}/>;
    }
  },

  revealAnnotation (e) {
    e.preventDefault();
    console.log('Annotation revealed~!');
  },

  addLineBreakIfNewLine (boolean) {
    if (boolean) {
      return (<br />);
    } else {
      return;
    }
  },

  buildLyricsWithReferents () {
    const track = this.state.track;
    let annotations = track.annotations.slice();
    let sections = [];
    let annotation;
    let currentIndex = 0;
    let newLine;

    annotation = annotations.shift();
    while (annotations.length > 0) {
      if (currentIndex === annotation.referent_start_index) {
        let sectionText = this.state.track.lyrics.slice(
                            currentIndex,
                            annotation.referent_end_index + 1);

        if (sectionText.slice(-1) === "\n") {
           newLine = true;
        } else {
           newLine = false;
        }

        let span =  <span className="referent"
                          id={annotation.id}
                          onClick={this.revealAnnotation}>
                      {sectionText}
                    </span>;

        sections.push(span);
        currentIndex = annotation.referent_end_index + 1;
        annotation = annotations.shift();
      } else {
        let sectionText = this.state.track.lyrics.slice(
                            currentIndex,
                            annotation.referent_start_index);

        if (sectionText.slice(-1) === "\n") {
          newLine = true;
        } else {
          newLine = false;
        }

        let span =  <span className="nonreferent">
                      {sectionText}
                    </span>;

        sections.push(span);
        currentIndex = annotation.referent_start_index;
      }
    }

    let bookendSpan;
    if (currentIndex === 0) {
      bookendSpan = <span className="nonreferent">
                      {this.state.track.lyrics}
                    </span>;
    } else if (currentIndex < this.state.track.lyrics.length){
      bookendSpan = <span className="nonreferent">
                      {this.state.track.lyrics.slice(currentIndex,
                      this.state.track.lyrics.length)}
                    </span>;
    }

    sections.push(bookendSpan);

    return (<div className="track-lyrics">{sections}</div>);
  },

  render () {

    if (!this.state.track || !this.state.track.annotations) {
      return (
        <div></div>
      );
    }

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
      trackLyrics = <div  className="track-lyrics-container"
                          onMouseUp={this.sendAnnotation}>
                      {this.buildLyricsWithReferents()}
                    </div>;
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
