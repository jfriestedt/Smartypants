const React = require('react');

const AnnotationContainer = React.createClass ({
  getInitialState () {
    return {
      annotationButtonRevealed: true,
      annotationFormRevealed: false
    };
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

    let annotationBeginButton = () => {
      if (this.state.annotationButtonRevealed) {
        return (
          <button className="annotation-begin-button">
            Start the Smartypants Annotation
          </button>
        );
      }
    };

    return (
      <div className="annotation-container" style={containerStyle}>
        {annotationBeginButton()}
      </div>
    );
  }
});

module.exports = AnnotationContainer;
