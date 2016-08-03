const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const NavBar = React.createClass({
  getInitialState () {
    let isUserloggedIn = SessionStore.isUserLoggedIn ? true : false;
    return {loggedIn: isUserloggedIn, currentUser: SessionStore.currentUser()};
  },

  componentDidMount () {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _handleLogOut(){
    SessionActions.logout();
  },

  greeting() {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <hgroup className="nav-group">
          <h2 className="nav-name">
            Welcome, {SessionStore.currentUser().username}!
          </h2>
          <input  className="nav-button"
                  type="submit"
                  value="Sign Out"
                  onClick={ this._handleLogOut }
          />
        </hgroup>
      );
    } else {
      return (
        <hgroup className="nav-group">
          <Link to="/login" className="nav-button">Sign In</Link>
          <Link to="/signup" className="nav-button">Sign Up</Link>
        </hgroup>
      );
    }
  },

  // TODO: Change "Add a Song" link's route to the add track route, when it exists.

  render () {
    return (
      <nav className="nav-bar">
        <Link to="/" className="nav-button">Add a Song</Link>
        <div className="logo-container">
          <Link to="/" className="nav-logo logo" />
        </div>
        { this.greeting() }
      </nav>
    );
  }
});

module.exports = NavBar;
