// React
const React = require('react');
const ReactDOM = require('react-dom');

// Window testing
window.SessionApiUtil = require('./util/session_api_util');
window.success = () => {console.log("success");};
window.error = () => {console.log("error");};

const App = React.createClass({
  render () {
    return (
      <div className="App">
        // TODO: Remove me!
        <h1>SMARTYPANTS</h1>
      </div>
    );
  }
});

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<App />, document.getElementById('root'));
});
