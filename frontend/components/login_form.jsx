const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const TrackActions = require('../actions/track_actions');
const ErrorStore = require('../stores/error_store');

const LoginForm = React.createClass({
  contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState () {
    return {username: "", password: ""};
  },

  componentDidMount () {
    this.errorListener = ErrorStore.addListener(this.updateErrors);
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount () {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  fieldErrors: function (field) {
    const errors = ErrorStore.errors("login");
    if (!errors[field]) { return; }
    const messages = errors[field].map(function (errorMsg, i) {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul className="errors">{ messages }</ul>;
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
      TrackActions.fetchAllTracks();
    }
  },

  _changeUsername (e) {
    this.setState(
      {username: e.target.value}
    );
  },

  _changePassword (e) {
    this.setState(
      {password: e.target.value}
    );
  },

  _onSubmit (e) {
    e.preventDefault();
    SessionActions.login(this.state);
  },

  _guestLogin (e) {
    e.preventDefault();
    let guestUser = {username: "guest", password: "password"};
    SessionActions.login(guestUser);
  },

  updateErrors () {
    this.forceUpdate();
  },

  render () {
    return (
      <div className="session-form-container">
        <h1 className="session-heading">SIGN IN</h1>
        { this.fieldErrors("login") }
        <form className="login-form" onSubmit={this._onSubmit}>

          <label className="session-field-label">Username</label>
          <input  className="session-input"
                  type="text"
                  value={this.state.username}
                  onChange={this._changeUsername}
          />
          { this.fieldErrors("username") }

          <label className="session-field-label">Password</label>
          <input  className="session-input"
                  type="password"
                  value={this.state.pasword}
                  onChange={this._changePassword}
          />
          { this.fieldErrors("password") }

          <div className="form-button-group">
            <input className="form-button" type="submit" value="Login" />
            <button className="guest form-button" onClick={this._guestLogin}>
              Guest Login
            </button>
          </div>

          <span className="switch-prompt">
            Don't have an account?  <button
                                      className="form-switch-button"
                                      onClick={this.props.switchForms}>
                                      Sign Up!
                                    </button>
          </span>

        </form>
      </div>
    );
  }
});

module.exports = LoginForm;
