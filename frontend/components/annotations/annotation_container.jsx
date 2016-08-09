const React = require('react');

const AnnotationContainer = React.createClass ({
  render () {
    return (
      <div className="annotation-container">
        "{this.props.annotation.selection}"
      </div>
    );
  }
});

module.exports = AnnotationContainer;
