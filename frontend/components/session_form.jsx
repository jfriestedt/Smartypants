const ErrorActions = require('../actions/error_actions');
const ErrorStore = require('../stores/error_store');
const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const TrackActions = require('../actions/track_actions');

const SessionForm = React.createClass({
  _changeUsername (e) {
    e.preventDefault();
    this.setState(
      {username: e.target.value}
    );
  },

  _changePassword (e) {
    e.preventDefault();
    this.setState(
      {password: e.target.value}
    );
  },

  contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  componentDidMount () {
    this.errorListener = ErrorStore.addListener(this.updateErrors);
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount () {
    ErrorStore.clearErrors();
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  fieldErrors (field) {
    const errors = ErrorStore.errors(this.props.formType);
    if (!errors[field]) { return; }

    const messages = errors[field].map(function (errorMsg, i) {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul className="errors">{ messages }</ul>;
  },

  getInitialState () {
    return {username: "", password: ""};
  },

  _guestLogin (e) {
    e.preventDefault();
    let guestUser = { username: "guest", password: "password" };
    SessionActions.login(guestUser);
  },

  _onSubmit (e) {
    e.preventDefault();
    if (this.props.formType === "login") {
      SessionActions.login(this.state);
    } else if (this.props.formType === "signup") {
      SessionActions.signup(this.state);
    }
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

  updateErrors () {
    this.forceUpdate();
  },

  render () {
    let sessionHeader;
    let formButtonGroup;
    let switchPrompt;

    if (this.props.formType === "login") {
      sessionHeader = <h1 className="session-heading">SIGN IN</h1>;
      formButtonGroup =
        <div className="form-button-group">
          <input className="form-button" type="submit" value="Login" />
          <button className="guest form-button"
                  onClick={this._guestLogin}>
            Guest Login
          </button>
        </div>;
      switchPrompt =
        <span className="switch-prompt">
          Don't have an account?
          <a className="form-switch-button"
                  onClick={this.props.switchForms}>
            Sign Up!
          </a>
        </span>;
    } else if (this.props.formType === "signup") {
      sessionHeader = <h1 className="session-heading">SIGN UP</h1>;
      formButtonGroup =
        <div className="form-button-group">
          <input  className="form-button"
                  type="submit"
                  value="Create Account" />
        </div>;
      switchPrompt =
        <span className="switch-prompt">
          Already have an account?
          <a
            className="form-switch-button"
            onClick={this.props.switchForms}>
            Sign In!
          </a>
        </span>;
    }

    return (
      <div className="session-form-container">
        {sessionHeader}
        { this.fieldErrors(this.props.formType) }
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
          {formButtonGroup}
          {switchPrompt}
        </form>
      </div>
    );
  }
});

module.exports = SessionForm;
