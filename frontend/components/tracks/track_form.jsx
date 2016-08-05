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
          <header className="new-track-header">
            <h1>Add Song</h1>
            <h2>Primary info</h2>
          </header>
          <div className="track-form">

            <label className="track-field-label">BY *</label>
            <input  type="text"
              className="track-field-input"
              value={this.state.artist}
              placeholder="The primary artist, author, creator, etc."
              onChange={this.update("artist")}/>

            <label className="track-field-label">TITLE *</label>
            <input  type="text"
              className="track-field-input"
              value={this.state.title}
              placeholder="Title"
              onChange={this.update("title")}/>

            <label className="track-field-label">LYRICS *</label>
            <textarea className="track-field-input lyrics-input"
              rows="20"
              cols="40"
              value={this.state.lyrics}
              onChange={this.update("lyrics")}/>

            <input
              type="submit"
              className="form-button"
              value="Submit"
              onClick={this.handleSubmit}/>
          </div>
        </main>
      </section>
    );
  }

});

module.exports = TrackForm;
