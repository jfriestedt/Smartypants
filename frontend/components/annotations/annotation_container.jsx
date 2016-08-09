const React = require('react');

const AnnotationContainer = React.createClass ({

  render () {
    let containerStyle = {
      position: 'relative',
      top: this.props.annotation.yPosition - 345
    };
    return (
      <div className="annotation-container" style={containerStyle}>
        "{this.props.annotation.selection}"
      </div>
    );
  }
});

module.exports = AnnotationContainer;
