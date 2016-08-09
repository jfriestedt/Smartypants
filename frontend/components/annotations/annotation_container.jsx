const React = require('react');
const ReactDOM = require('react-dom');
const Autosize = require('autosize');

const AnnotationContainer = React.createClass ({
  getInitialState () {
    return {
      annotationButtonRevealed: true,
      annotationFormRevealed: false
    };
  },

  componentDidUpdate () {
    const annotationFormTextArea = ReactDOM.findDOMNode(this.refs.textarea);
    Autosize(annotationFormTextArea);
  },

  revealAnnotationForm (e) {
    e.preventDefault();
    this.setState({
      annotationButtonRevealed: false,
      annotationFormRevealed: true
    });
  },

  render () {
    let containerStyle = {
      top: this.props.annotation.yPosition - 360
    };

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
          <form className="annotation-form">
            <textarea ref="textarea"
                      rows="7"
                      cols="47"
                      placeholder="Say something super smart"/>
            <hr></hr>
            <div className="annotation-form-button-group">
              <button className="annotation-form-button-save">Save</button>
              <button className="annotation-form-button-cancel">Cancel</button>
            </div>
          </form>
        );
      }
    };

    return (
      <div className="annotation-container" style={containerStyle}>
        {annotationBeginButton()}
        {annotationForm()}
      </div>
    );
  }
});

module.exports = AnnotationContainer;
