const React = require('react');
const ReactDOM = require('react-dom');
const Autosize = require('autosize');
const CommentActions = require('../../actions/comment_actions');

const CommentsContainer = React.createClass({
  getInitialState () {
    return({ body: "" });
  },

  // TODO: Should this be componentDidMount?
  componentDidUpdate () {
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
  },

  render () {
    // {this.props.commentable.comments.map(function (comment) {
    //   return (<Comment comment={comment}/>);
    // })}
    return (
      <div className="comments-container">
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
        <div className="comments-index">
        </div>
      </div>
    );
  }

});

module.exports = CommentsContainer;
