const React = require('react');
const TrackStore = require('../../stores/track_store');
const TrackActions = require('../../actions/track_actions');
const AnnotationStore = require('../../stores/annotation_store');
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
    this.annotationListener = AnnotationStore.addListener(this._onChange);
    TrackActions.fetchSingleTrack(parseInt(this.props.params.trackId));
  },

  componentWillUnmount () {
    this.trackListener.remove();
    this.annotationListener.remove();
  },

  componentWillReceiveProps (newProps) {
    TrackActions.fetchSingleTrack(parseInt(newProps.params.trackId));
  },

  _onChange () {
    this.setState(this.getStateFromStore());
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

  render () {

    if (!this.state.track || !this.state.track.annotations) {
      return (
        <div></div>
      );
    }

    const buildLyricsWithReferents = () => {
      const track = this.state.track;

      let annotations = track.annotations.slice();
      let startIndices = [];
      let endIndices = [];
      let annotationIds = [];
      let sections = [];

      annotations.forEach(function (annotation) {
        startIndices.push(annotation.referent_start_index);
        endIndices.push(annotation.referent_end_index);
        annotationIds.push(annotation.id);
      });

      let i = 0;

      while (i < this.state.track.lyrics.length) {
        if (startIndices.indexOf(i) >= 0) {
          let endIndex = endIndices[startIndices.indexOf(i)];
          let id = annotationIds[startIndices.indexOf(i)];
          let className = "referent";

          sections.push({text: this.state.track.lyrics.slice(i, endIndex),
                          className: className,
                          id: id});

          if (i === endIndex) {
            i++;
          } else {
            i = endIndex;
          }

        } else {
          let unannotatedLyric = "";
          while (
            startIndices.indexOf(i) === -1 &&
            i < this.state.track.lyrics.length
          ) {
            unannotatedLyric += this.state.track.lyrics[i];
            i++;
          }

          sections.push({ text: unannotatedLyric,
                          className: "nonreferent"});
        }
      }

      return (
        <div className="track-lyrics">
          {sections.map(function (section, id) {
             return (
               <span className={section.className} key={id} id={section.id}>
                 {section.text}
               </span>);
             })}
        </div>
      );
    };

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
                      {buildLyricsWithReferents()}
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
