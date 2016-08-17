const React = require('react');
const ReactDOM = require('react-dom');
const Autosize = require('autosize');
const CommentActions = require('../../actions/comment_actions');
const SessionStore = require('../../stores/session_store');

const CommentsContainer = React.createClass({
  getInitialState () {
    return({ body: "" });
  },

  componentDidMount () {
    const commentFormTextArea = ReactDOM.findDOMNode(this.refs.textarea);
    Autosize(commentFormTextArea);
  },

  updateBody (e) {
    e.preventDefault();
    let body = e.target.value;

    this.setState({
      body: body,
    });
  },

  handleClick (e) {
    e.preventDefault();
    let comment = {
      body: this.state.body,
      commentable_type: this.props.commentableType,
      commentable_id: this.props.commentable.id
    };

    CommentActions.createComment(comment);

    this.setState({
      body: ""
    });
  },

  commentsForm () {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <div className="comments-form">
          <textarea ref="textarea"
            rows="2"
            placeholder="Please, enlighten us..."
            value={this.state.body}
            onChange={this.updateBody}/>
          <div className="form-button-group">
            <button className="form-button-save"
              onClick={this.handleClick}>
              Submit
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <h3 className="form-sign-in-prompt">Sign in to leave a comment!</h3>
      );
    }
  },

  render () {
    return (
      <div className="comments-container">
        {this.commentsForm()}
        <ul className="comments-index">
          {this.props.commentable.comments.map(function (comment, i) {
            return (
              <li className="comment" key={i}>
                <hgroup className="comment-header">
                  <h3>{comment.author.username}</h3>
                  <h4>{comment.time_ago} ago</h4>
                </hgroup>
                <p>{comment.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

});

module.exports = CommentsContainer;
