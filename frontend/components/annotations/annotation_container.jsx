const React = require('react');
const ReactDOM = require('react-dom');
const Autosize = require('autosize');
const AnnotationActions = require('../../actions/annotation_actions');
const SessionStore = require('../../stores/session_store');
const CommentsContainer = require('../comments/comments_container');
const VoteActions = require('../../actions/vote_actions');
const TrackStore = require('../../stores/track_store');

const AnnotationContainer = React.createClass ({
  getInitialState () {
    if (this.props.annotation.id) {
      return {
        annotation: this.props.annotation,
        annotationButtonRevealed: false,
        annotationFormRevealed: false,
        annotationShowRevealed: true
      };
    } else {
      return {
        annotation: this.props.annotation,
        annotationButtonRevealed: true,
        annotationFormRevealed: false,
        annotationShowRevealed: false
      };
    }
  },

  componentDidMount () {
    this.trackListener = TrackStore.addListener(this._onChange);
    const annotationFormTextArea = ReactDOM.findDOMNode(this.refs.textarea);
    Autosize(annotationFormTextArea);
  },

  componentWillUnmount () {
    this.trackListener.remove();
  },

  _onChange () {
    this.setState({
      annotation: this.props.annotation,
      annotationButtonRevealed: false,
      annotationFormRevealed: false,
      annotationShowRevealed: true
    });
  },

  revealAnnotationForm (e) {
    e.preventDefault();
    this.setState({
      annotationButtonRevealed: false,
      annotationFormRevealed: true,
      annotationShowRevealed: false
    });
  },

  updateBody (e) {
    e.preventDefault();
    let annotation = this.state.annotation;
    annotation.body = e.target.value;

    this.setState({
      annotation: annotation
    });
  },

  handleClick (e) {
    e.preventDefault();
    if (this.state.annotation.id) {
      this.updateAnnotation();
    } else {
      this.createAnnotation();
    }
  },

  updateAnnotation () {
    const annotation = this.state.annotation;
    AnnotationActions.updateAnnotation(
      annotation,
      annotation.track.id,
      annotation.yPosition
    );
  },

  destroyAnnotation (e) {
    e.preventDefault();
    const annotation = this.state.annotation;
    const annotationId = annotation.id;
    AnnotationActions.destroyAnnotation(
      annotationId, annotation.track.id
    );
  },

  createAnnotation () {
    let stateAnnotation = this.state.annotation;
    let trackId = parseInt(this.props.trackId);

    let annotation = {
      annotation: {
        referent_start_index: stateAnnotation.startIndex,
        referent_end_index: stateAnnotation.endIndex,
        body: stateAnnotation.body,
      }
    };

    AnnotationActions.createAnnotation(
      annotation,
      trackId,
      stateAnnotation.yPosition
    );
  },

  closeAnnotation (e) {
    this.props.resetState();

    this.setState({
      annotation: {},
      annotationButtonRevealed: false,
      annotationFormRevealed: false
    });
  },

  revealEditForm (e) {
    e.preventDefault();
    this.setState({
      annotationButtonRevealed: false,
      annotationFormRevealed: true,
      annotationShowRevealed: false
    });
  },

  authorButtonGroup () {
    if (SessionStore.currentUser().id === this.state.annotation.author.id) {
      return (
        <div className="annotation-show-button-group">
          <button className="annotation-show-button-edit"
                  onClick={this.revealEditForm}>
            Edit
          </button>
          <button className="annotation-show-button-delete"
                  onClick={this.destroyAnnotation}>
            Delete
          </button>
        </div>
      );
    }
  },

  annotationCommentForm () {
    return (
      <CommentsContainer  commentableType="Annotation"
                          commentable={this.state.annotation}
                          author={SessionStore.currentUser()}/>
    );
  },

  scoreColor (score) {
    return parseInt(score) >= 0 ? "green" : "red";
  },

  voterButtonGroup () {
    if (SessionStore.isUserLoggedIn()) {
      let score = this.props.annotation.score;
      if (parseInt(score) >= 0) { score = `+${score}`; }
      const className = "score " + this.scoreColor(score);

      return (
        <div className="vote-form-container">
          <button className="upvote-button"
                  onClick={this.sendUpvote}>
          </button>
          <span className={className}>{score}</span>
          <button className="downvote-button"
                  onClick={this.sendDownvote}>
          </button>
        </div>
      );
    }
  },

  sendUpvote (e) {
    e.preventDefault();
    const vote = {
      voter_id: SessionStore.currentUser().id,
      annotation_id: this.props.annotation.id,
      value: 1
    };

    VoteActions.createUpvote(vote);
  },

  sendDownvote (e) {
    e.preventDefault();
    const vote = {
      voter_id: SessionStore.currentUser().id,
      annotation_id: this.props.annotation.id,
      value: -1
    };

    VoteActions.createDownvote(vote);
  },

  render () {
    let containerStyle;

    if (this.state.annotation.yPosition) {
      containerStyle = {
        top: this.state.annotation.yPosition - 360
      };
    } else {
      containerStyle = {
        top: TrackStore.yPosition() - 360
      };
    }

    const annotationBeginButton = () => {
      if (this.state.annotationButtonRevealed) {
        return (
          <button className="annotation-begin-button"
                  onClick={this.revealAnnotationForm}>
            Start the Smartypants Annotation
          </button>
        );
      }
    };

    const annotationForm = () => {
      if (this.state.annotationFormRevealed) {
        return (
          <div className="annotation-form">
            <textarea ref="textarea"
                      rows="7"
                      cols="47"
                      placeholder="Say something super smart"
                      value={this.state.annotation.body}
                      onChange={this.updateBody}/>
            <hr></hr>
            <div className="form-button-group">
              <button className="form-button-save"
                      onClick={this.handleClick}>
                      Save
              </button>
              <button className="annotation-form-button-cancel"
                      onClick={this.closeAnnotation}>
                      Cancel
              </button>
            </div>
          </div>
        );
      }
    };

    const annotationShow = () => {
      if (this.state.annotationShowRevealed) {
        let authorUsername = this.props.annotation.author.username;
        return (
          <div className="annotation-show">
            <hgroup className="annotation-header">
              <h3>Smartypants Annotation added by {authorUsername}</h3>
            </hgroup>
            <div className="annotation-body">
              <p>{this.state.annotation.body}</p>
            </div>
            {this.authorButtonGroup()}
            {this.voterButtonGroup()}
            {this.annotationCommentForm()}
            <div className="annotation-show-vote-form-container">
            </div>
          </div>
        );
      }
    };

    return (
      <div className="annotation-container" style={containerStyle}>
        {annotationBeginButton()}
        {annotationForm()}
        {annotationShow()}
      </div>
    );
  }
});

module.exports = AnnotationContainer;
