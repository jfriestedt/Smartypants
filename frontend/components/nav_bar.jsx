const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const Modal = require('react-modal');
const ModalStyle = require('./modal_style');

const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');

const NavBar = React.createClass({
  getInitialState () {
    return({
      modalOpen: false,
      logIn: false
    });
  },

  componentDidMount () {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _handleLogOut(){
    SessionActions.logout();
  },

  _handleClick (bool) {
    this.setState({
       modalOpen: true,
       logIn: bool
     });
  },

  _onModalClose () {
    this.setState({ modalOpen: false});
    ModalStyle.content.opacity = 0;
  },

  _onModalOpen () {
    ModalStyle.content.opacity = 1;
  },

  greeting () {
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

      const form = (this.state.logIn) ? <LoginForm /> : <SignupForm />;

      return (
        <hgroup className="nav-group">
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this._onModalClose}
            onAfterOpen={this._onModalOpen}
            style={ModalStyle}
          >
            {form}
            <button className="close-button" onClick={this._onModalClose}>
              x
            </button>

          </Modal>

          <button id="sign-up-button"
                  className="nav-button"
                  onClick={this._handleClick.bind(this, false)}>
            SIGN UP
          </button>
          <button id="sign-in-button"
                  className="nav-button"
                  onClick={this._handleClick.bind(this, true)}>
            SIGN IN
          </button>
        </hgroup>
      );
    }
  },

  // TODO: Change "Add a Song" link's route to the add track route, when it exists.

  render () {
    return (
      <nav className="nav-bar">

        <Link to="/" className="nav-button">ADD SONG</Link>
        <div className="logo-container">
          <Link to="/" className="nav-logo logo" />
        </div>
        { this.greeting() }
      </nav>
    );
  }
});

module.exports = NavBar;
