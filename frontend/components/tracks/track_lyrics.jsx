const React = require('react');
const TrackStore = require('../../stores/track_store');
const TrackActions = require('../../actions/track_actions');

const TrackLyrics = React.createClass ({
  getInitialState () {
    return {
      annotationButtonRevealed: false,
      selection: "",
      startIndex: 0,
      endIndex: 0
    };
  },

  // revealAnnotationButton (e) {
  //   if(document.getSelection().toString().length === 0) {
  //     return;
  //   }
  //
  //   this.setState({selected: null});
  //   if (document.getSelection().anchorNode !== document.getSelection().focusNode) {
  //     return;
  //   }
  //
  //   let style = {yPosition: e.pageY - 300};
  //   let element = document.getSelection().anchorNode.parentElement;
  //   let lyrics = this.props.track.lyrics;
  //   let start = document.getSelection().anchorOffset;
  //   let end = document.getSelection().focusOffset;
  //
  //   if (start > end) {
  //     let temp = start;
  //     start = end;
  //     end = temp;
  //   }
  //
  //   let selection = lyrics.slice(start, end);
  //
  //   while (element.previousSibling) {
  //     start += element.previousSibling.innerText.length;
  //     end += element.previousSibling.innerText.length;
  //     element = element.previousSibling;
  //   }
  //
  //   this.setState({
  //     annotationButtonRevealed: true,
  //     selection: selection,
  //     startIndex: start,
  //     endIndex: end,
  //     annotationButtonStyle: style
  //   });
  // },

  render () {
    return (
      <span className="track-lyrics" onMouseUp={this.props.sendAnnotation}>
        {this.props.track.lyrics}
      </span>
    );
  }
});

module.exports = TrackLyrics;
