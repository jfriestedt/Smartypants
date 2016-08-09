// React
const React = require('react');
const ReactDOM = require('react-dom');

// React Router
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

// Components
const NavBar = require('./components/nav_bar');
const LoginForm = require('./components/login_form');
const SignupForm = require('./components/signup_form');
const TrackIndex = require('./components/tracks/track_index');
const TrackShow = require('./components/tracks/track_show');
const TrackForm = require('./components/tracks/track_form');

// Misc
const SessionActions = require('./actions/session_actions');
const SessionStore = require('./stores/session_store');

// React Modal
const Modal = require("react-modal");

// Window testing
// window.user = { username: "wonipan", password: "George546!" };
// window.SessionActions = require('./actions/session_actions');
// window.SessionStore = require('./stores/session_store');
window.TrackStore = require('./stores/track_store');
// window.TrackApiUtil = require('./util/track_api_util');
window.TrackActions = require('./actions/track_actions');

const App = React.createClass({
  render () {
    return (
      <div className="App">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
});

const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={TrackIndex} />
      <Route path="/tracks/:trackId" component={TrackShow} />
      <Route path="/new" component={TrackForm} onEnter={ensureLoggedIn} />
    </Route>
  </Router>
);

function ensureLoggedIn (nextState, replace) {
  if (!SessionStore.isUserLoggedIn()) {
    replace('/');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  SessionActions.receiveCurrentUser(window.currentUser);
  ReactDOM.render(appRouter, root);
});
