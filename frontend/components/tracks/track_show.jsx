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

  render () {
    return (
      <div className="track-show">
        <div className="track-banner">
          <span className="track-banner-overlay"></span>
          <hgroup className="track-show-title-artist-inset">
            <h1>{this.state.track.title}</h1>
            <h2>{this.state.track.artist}</h2>
          </hgroup>
        </div>
        <div className="track-show-columns">
          <div className="track-show-primary-column">
            {this.state.track.lyrics}
          </div>
          <div className="secondary-column">
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TrackShow;
