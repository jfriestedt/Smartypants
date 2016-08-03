// React
const React = require('react');
const ReactDOM = require('react-dom');

// Window testing
window.user = { username: "wonipan", password: "George546!" };
window.SessionActions = require('./actions/session_actions');

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
