const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const TrackActions = require('../actions/track_actions')
const ErrorStore = require('../stores/error_store');
const ErrorActions = require('../actions/error_actions');

const SignupForm = React.createClass({
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
    ErrorStore.clearErrors();
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  fieldErrors (field) {
    const errors = ErrorStore.errors("signup");
    if (!errors[field]) { return; }
    const messages = errors[field].map(function (errorMsg, i) {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul className="errors">{ messages }</ul>;
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
      TrackActions.fetchAllTrack();
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
    SessionActions.signup(this.state);
  },

  updateErrors() {
    this.forceUpdate();
  },

  render () {
    return (
      <div className="session-form-container">
        <h1 className="session-heading">SIGN UP</h1>
        { this.fieldErrors("signup") }
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

          <input className="form-button" type="submit" value="Create Account" />

            <span className="switch-prompt">
              Already have an account? <button
                                          className="form-switch-button"
                                          onClick={this.props.switchForms}>
                                          Sign In!
                                        </button>
            </span>

        </form>
      </div>
    );
  }
});

module.exports = SignupForm;
