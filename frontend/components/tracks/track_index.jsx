const React = require('react');
const TrackActions = require ('../../actions/track_actions');
const TrackStore = require('../../stores/track_store');
const TrackIndexItem = require('./track_index_item');

const TrackIndex = React.createClass ({
  getInitialState () {
    return { tracks: TrackStore.all() };
  },

  componentDidMount () {
    TrackActions.fetchAllTracks();
    TrackStore.addListener(this._handleChange);
  },

  _handleChange () {
    this.setState({ tracks: TrackStore.all()});
  },

  render () {
    return (
      <main className="track-index">
        {this.state.tracks.map( (track) => {
          return <TrackIndexItem key={track.id} track={track} />;
        })}
      </main>
    );
  }
});

module.exports = TrackIndex;
