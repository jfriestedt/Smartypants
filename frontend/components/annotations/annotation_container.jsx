const React = require('react');

const AnnotationContainer = React.createClass ({

  render () {
    let containerStyle = {
      top: this.props.annotation.yPosition - 360
    };
    return (
      <div className="annotation-container" style={containerStyle}>
        <p>{this.props.annotation.selection}</p>
      </div>
    );
  }
});

module.exports = AnnotationContainer;
