const React = require('react');
const TrackActions = require('../../actions/track_actions');
const hashHistory = require('react-router').hashHistory;

const TrackForm = React.createClass({
  getInitialState() {
    return {
      title: "",
      artist: "",
      album: "",
      lyrics: "",
      imageFile: null,
      imageUrl: null
    };
  },

  handleSubmit(event) {
    let formData = new FormData();
    
    formData.append("track[title]", this.state.title);
    formData.append("track[artist]", this.state.artist);
    formData.append("track[album]", this.state.album);
    formData.append("track[lyrics]", this.state.lyrics);
    if (this.state.imageFile) {
      formData.append("track[image]", this.state.imageFile);
    }

    event.preventDefault();
    const track = Object.assign({}, formData);
    TrackActions.createTrack(formData);
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

  updateFile (e) {
    let fileReader = new FileReader();
    let file = e.currentTarget.files[0];
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null});
    }
  },

  render () {
    return (
      <section className="new-track-section">
        <main className="new-track-container">
          <header className="new-track-header">
            <h1>Add Song</h1>
            <h2>Primary info</h2>
            <small>* required</small>
          </header>

          <div className="track-form-column">
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

              <label className="track-field-label">ALBUM</label>
                <input  type="text"
                  className="track-field-input"
                  value={this.state.album}
                  placeholder="Album"
                  onChange={this.update("album")}/>

              <label className="track-field-label">LYRICS *</label>
              <textarea className="track-field-input lyrics-input"
                rows="20"
                cols="40"
                value={this.state.lyrics}
                onChange={this.update("lyrics")}/>

              <input type="file" onChange={this.updateFile}/>

              <input
                type="submit"
                className="form-button"
                value="Submit"
                onClick={this.handleSubmit}/>

              <img src={this.state.imageUrl}></img>
            </div>
          </div>

          <div className="track-form-column"></div>
        </main>
      </section>
    );
  }

});

module.exports = TrackForm;
