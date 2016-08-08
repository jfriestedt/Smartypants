const React = require('react');
const TrackStore = require('../../stores/track_store');
const TrackActions = require('../../actions/track_actions');

const TrackLyrics = React.createClass ({
  render () {
    return (
      <span className="track-lyrics">
        {this.props.track.lyrics}
      </span>
    );
  }
});

module.exports = TrackLyrics;
