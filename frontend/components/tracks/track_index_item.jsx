const React = require('react');
const hashHistory = require('react-router').hashHistory;

const SessionStore = require('../../stores/session_store');
const TrackActions = require('../../actions/track_actions');

const TrackIndexItem = React.createClass ({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState () {
    if (SessionStore.isUserLoggedIn()) {
      return { loggedIn: true };
    } else {
      return { loggedIn: false };
    }
  },

  componentDidMount () {
    this.sessionListener = SessionStore.addListener(this.handleChange);
  },

  componentWillUnmount () {
    this.sessionListener.remove();
  },

  deleteButton () {
    if (this.state.loggedIn) {
      if (this.props.track.submitter.id === SessionStore.currentUser().id) {
        return (
          <button className="delete-button"
                  onClick = {this.handleDeleteClick}>
            Delete
          </button>
        );
      }
    }
  },

  handleChange () {
    if (SessionStore.isUserLoggedIn()) {
      this.setState({
        loggedIn: true
      });
    } else {
      this.setState({
        loggedIn: false
      });
    }
  },

  handleDeleteClick (e) {
    e.stopPropagation();
    e.preventDefault();
    TrackActions.destroyTrack(this.props.track.id);
  },

  showTrack () {
    this.context.router.push('/tracks/' + this.props.track.id);
  },

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

            {this.deleteButton()}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TrackIndexItem;
