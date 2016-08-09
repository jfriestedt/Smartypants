const React = require('react');

const AnnotationContainer = React.createClass ({

  render () {
    let containerStyle = {
      top: this.props.annotation.yPosition - 360
    };
    return (
      <div className="annotation-container" style={containerStyle}>
        <button className="annotation-begin-button">
          Start the Smartypants Annotation
        </button>
      </div>
    );
  }
});

module.exports = AnnotationContainer;
