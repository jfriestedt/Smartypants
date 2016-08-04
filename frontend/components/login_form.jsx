const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');

const LoginForm = React.createClass({
  contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState () {
    return {username: "", password: ""};
  },

  componentDidMount () {
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount () {
    this.sessionListener.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
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

  render () {
    return (
      <div className="session-form-container">
        <h1 className="session-heading">SIGN IN</h1>
        <form className="login-form" onSubmit={this._onSubmit}>

          <label className="session-field-label">Username</label>
          <input  className="session-input"
                  type="text"
                  value={this.state.username}
                  onChange={this._changeUsername}
          />

          <label className="session-field-label">Password</label>
          <input  className="session-input"
                  type="password"
                  value={this.state.pasword}
                  onChange={this._changePassword}
          />

        <input className="session-button" type="submit" value="Login" />

        </form>
      </div>
    );
  }
});

module.exports = LoginForm;
