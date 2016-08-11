const React = require('react');
const ReactDOM = require('react-dom');
const Autosize = require('autosize');

const CommentsContainer = React.createClass({
  getInitialState () {
    return({ body: "" });
  },

  // TODO: Should this be componentDidMount?
  componentDidUpdate () {
    const annotationFormTextArea = ReactDOM.findDOMNode(this.refs.textarea);
    Autosize(annotationFormTextArea);
  },

  updateBody (e) {
    e.preventDefault();
    let body = e.target.value;

    this.setState({
      body: body
    });
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
