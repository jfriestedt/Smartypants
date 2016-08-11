const React = require('react');
const TrackStore = require('../../stores/track_store');
const TrackActions = require('../../actions/track_actions');
const AnnotationContainer = require('../annotations/annotation_container');

const TrackShow = React.createClass ({
  getStateFromStore () {
    return {
      track: TrackStore.find(parseInt(this.props.params.trackId)),
      annotation: {},
      selected: null,
      focused: null,
    };
  },

  getInitialState () {
    return this.getStateFromStore();
  },

  componentWillMount () {
    document.body.style.backgroundColor = "#fafafa";
  },

  componentDidMount () {
    this.trackListener = TrackStore.addListener(this._onChange);
    TrackActions.fetchSingleTrack(parseInt(this.props.params.trackId));
  },

  componentWillUnmount () {
    this.trackListener.remove();
    document.body.style.backgroundColor = null;
  },

  componentWillReceiveProps (newProps) {
    TrackActions.fetchSingleTrack(parseInt(newProps.params.trackId));
  },

  _onChange () {
    this.setState(this.getStateFromStore());
  },

  findAnnotationById (id) {
    let annotations = this.state.track.annotations;

    for (var i = 0; i < annotations.length; i++) {
      if (annotations[i].id === id) { return annotations[i]; }
    }
  },

  revealAnnotationShow (e) {
    e.preventDefault();

    const track = this.state.track;

    let annotationId = parseInt(e.currentTarget.id);
    let annotation = this.findAnnotationById(annotationId);
    annotation.yPosition = e.pageY;
    let annotationBody = annotation.body;
    let yPosition = e.pageY;

    this.setState({
      annotation: annotation,
      focused: parseInt(e.currentTarget.id),
    });
  },

  sendSelection (e) {
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
  },

  annotationContainer () {
    if (Object.getOwnPropertyNames(this.state.annotation).length === 0) {
      return;
    } else {
      return <AnnotationContainer annotation={this.state.annotation}
                                  trackId={this.props.params.trackId}
                                  resetState={this.resetState}/>;
    }
  },

  buildLyricsWithReferents () {
    const track = this.state.track;
    let annotations = track.annotations.slice();
    let sections = [];
    let annotation;
    let currentIndex = 0;
    annotation = annotations.shift();
    while (Boolean(annotation) || annotations.length > 0) {
      if (currentIndex === annotation.referent_start_index) {
        let sectionText = this.state.track.lyrics.slice(
                            currentIndex,
                            annotation.referent_end_index + 1);
        let className;
        if (this.state.focused === annotation.id) {
          className = "referent focused";
        } else {
          className = "referent";
        }

        let span =  <span className={className}
                          id={annotation.id}
                          key={currentIndex}
                          onClick={this.revealAnnotationShow}>
                      {sectionText}
                    </span>;

        sections.push(span);
        currentIndex = annotation.referent_end_index + 1;
        annotation = annotations.shift();
      } else {
        let sectionText = this.state.track.lyrics.slice(
                            currentIndex,
                            annotation.referent_start_index);

        let span =  <span className="nonreferent"
                          key={currentIndex}>
                      {sectionText}
                    </span>;

        sections.push(span);
        currentIndex = annotation.referent_start_index;
      }
    }

    let bookendSpan;
    if (currentIndex === 0) {
      bookendSpan = <span className="nonreferent"
                          key={currentIndex}>
                      {this.state.track.lyrics}
                    </span>;
    } else if (currentIndex < this.state.track.lyrics.length){
      bookendSpan = <span className="nonreferent"
                          key={currentIndex}>
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
                          onMouseUp={this.sendSelection}>
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
