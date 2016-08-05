const React = require('react');
const TrackActions = require('../../actions/track_actions');
const hashHistory = require('react-router').hashHistory;

const TrackForm = React.createClass({
  getInitialState() {
    return {
      title: "",
      artist: "",
      lyrics: "",
    };
  },

  handleSubmit(event) {
    event.preventDefault();
    const track = Object.assign({}, this.state);
    // TODO: write createTrack
    TrackActions.createTrack(track);
    this.navigateToIndex();
  },

  handleCancel(event) {
    event.preventDefault();
    this.navigateToIndex();
  },

  navigateToIndex () {
    hashHistory.push("/");
  },

  update (property) {
    return (e) => this.setState({[property]: e.target.value});
  },

  render () {
    return (
      <section className="new-track-section">
        <main className="new-track-container">
          <div className="track-form">
            <h1>Add Song</h1>
            <h2>Primary Info</h2>

            <label className="track-field-label">BY *</label>
            <input  type="text"
              className="track-field-input"
              value={this.state.artist}
              onChange={this.update("artist")}/>

            <label className="track-field-label">TITLE *</label>
            <input  type="text"
              className="track-field-input"
              value={this.state.title}
              onChange={this.update("title")}/>

            <label className="track-field-label">LYRICS *</label>
            <textarea className="track-field-input lyrics-input"
              rows="20"
              cols="40"
              value={this.state.lyrics}
              onChange={this.update("lyrics")}/>

            <input  type="submit"
              className="form-button"
              value="Submit"/>
          </div>
        </main>
      </section>
    );
  }

});

module.exports = TrackForm;
