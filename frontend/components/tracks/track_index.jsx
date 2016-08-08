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
    this.trackListener = TrackStore.addListener(this._handleChange);
  },

  componentWillUnmount () {
    this.trackListener.remove();
  },

  _handleChange () {
    this.setState({ tracks: TrackStore.all()});
  },

  render () {
    return (
      <div className="sections-container">
        <section className="smartypants-intro">
          <h2>
            Smartypants is a home for people who know too much about
            music. Show off your smarts.
          </h2>
        </section>
        <section className="main">
          <main className="track-index">
            {this.state.tracks.map( (track) => {
              return <TrackIndexItem key={track.id} track={track} />;
            })}
          </main>
        </section>
      </div>
    );
  }
});

module.exports = TrackIndex;
