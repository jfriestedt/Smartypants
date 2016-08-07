const React = require('react');
const hashHistory = require('react-router').hashHistory;

const TrackIndexItem = React.createClass ({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  showTrack () {
    this.context.router.push('/tracks/' + this.props.track.id);
  },

  // TODO: Add image rendering logic to image container
  render () {
    let submitter;

    if (this.props.track.submitter) {
      submitter = this.props.track.submitter.username;
    } else {
      submitter = "Smartypants.com";
    }

    return (
      <div className="track-index-item" onClick={this.showTrack}>

        <div className="track-index-item-overlay"></div>

        <div className="track-index-item-img-container">
          <img src={this.props.track.image_url}></img>
        </div>

        <div className="track-index-item-info">
          <div className="track-index-item-title-and-artist-container">
            <h2>{this.props.track.title}</h2>
            <h3>{this.props.track.artist}</h3>
          </div>

          <div className="track-index-item-submitter-container">
            <h4>Added by {submitter}</h4>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TrackIndexItem;
