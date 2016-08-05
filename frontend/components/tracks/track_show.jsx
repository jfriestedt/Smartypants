const React = require('react');
const TrackStore = require('../../stores/track_store');
const TrackActions = require('../../actions/track_actions');

const TrackShow = React.createClass ({
  getInitialState () {
    return this.getStateFromStore();
  },

  getStateFromStore () {
    return { track: TrackStore.find(parseInt(this.props.params.trackId)) };
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

  trackInfo () {
    if (!!this.state.track) {
      return (
        <hgroup className="track-show-title-artist-inset">
          <h1>{this.state.track.title}</h1>
          <h2>{this.state.track.artist}</h2>
        </hgroup>
      );
    } else {
      return (
        <hgroup className="track-show-title-artist-inset">
          <h1>Loading...</h1>
        </hgroup>
      );
    }
  },

  trackLyrics () {
    if (!!this.state.track) {
      return (
        <pre className="trackLyrics">
          {this.track.lyrics}
        </pre>
      );
    } else {
      return (
        <pre className="trackLyrics">
          Loading...
        </pre>
      );
    }
  },

  render () {
    let trackInfo = <hgroup className="track-show-title-artist-inset">
                      <h1>Loading...</h1>
                    </hgroup>;
    let trackLyrics = <pre className="track-lyrics">
                        Loading...
                      </pre>;

    if (this.state.track) {
      trackInfo = <hgroup className="track-show-title-artist-inset">
                    <h1>{this.state.track.title}</h1>
                    <h2>{this.state.track.artist}</h2>
                  </hgroup>;
      trackLyrics = <span className="track-lyrics">
                      {this.state.track.lyrics}
                    </span>;
    }

    return (
      <div className="track-show">
        <div className="track-banner">
          <span className="track-banner-overlay"></span>
          <div className="track-banner-content">
            {trackInfo}
          </div>
        </div>
        <div className="track-columns-container">
          <div className="track-show-primary-column">
            {trackLyrics}
          </div>
          <div className="secondary-column">
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TrackShow;
