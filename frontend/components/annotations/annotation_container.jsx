const React = require('react');
const ReactDOM = require('react-dom');
const Autosize = require('autosize');
const AnnotationActions = require('../../actions/annotation_actions');

const AnnotationContainer = React.createClass ({
  getInitialState () {
    return {
      annotation: this.props.annotation,
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

  updateBody (e) {
    e.preventDefault();
    let annotation = this.state.annotation;
    annotation.body = e.target.value;

    this.setState({
      annotation: annotation
    });
  },

  createAnnotation (e) {
    e.preventDefault();

    let stateAnnotation = this.state.annotation;
    let trackId = parseInt(this.props.trackId);

    let annotation = {
      annotation: {
        referent_start_index: stateAnnotation.startIndex,
        referent_end_index: stateAnnotation.endIndex,
        body: stateAnnotation.body,
      }
    };

    AnnotationActions.createAnnotation(annotation, trackId);
  },

  closeAnnotation (e) {
    this.setState({
      annotation: {},
      annotationButtonRevealed: false,
      annotationFormRevealed: false
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
          <div className="annotation-form">
            <textarea ref="textarea"
                      rows="7"
                      cols="47"
                      placeholder="Say something super smart"
                      value={this.state.annotation.body}
                      onChange={this.updateBody}/>
            <hr></hr>
            <div className="annotation-form-button-group">
              <button className="annotation-form-button-save"
                      onClick={this.createAnnotation}>
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

    return (
      <div className="annotation-container" style={containerStyle}>
        {annotationBeginButton()}
        {annotationForm()}
      </div>
    );
  }
});

module.exports = AnnotationContainer;
