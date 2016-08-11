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
    this.setState({modalOpen: false});
  },

  _handleModalClick (bool) {
    this.setState({
       modalOpen: true,
       logIn: bool
     });
  },

  _onModalClose () {
    this.setState({ modalOpen: false });
    ModalStyle.overlay.opacity = 0.5;
    ModalStyle.content.opacity = 0;
  },

  _onModalOpen () {
    ModalStyle.overlay.opacity = 1;
    ModalStyle.content.opacity = 1;
  },

  switchForms () {

    this.setState ({
      modalOpen: true,
      logIn: !this.state.logIn
    });
  },

  greeting () {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <hgroup className="nav-group">
          <h2 className="nav-name nav-button">
            Welcome, {SessionStore.currentUser().username}!
          </h2>
          <input  className="nav-button"
                  type="submit"
                  value="SIGN OUT"
                  onClick={ this._handleLogOut }
          />
        </hgroup>
      );
    } else {

      const form = (this.state.logIn) ? <LoginForm switchForms={this.switchForms}/> : <SignupForm switchForms={this.switchForms}/>;

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
                  onClick={this._handleModalClick.bind(this, false)}>
            SIGN UP
          </button>
          <button id="sign-in-button"
                  className="nav-button"
                  onClick={this._handleModalClick.bind(this, true)}>
            SIGN IN
          </button>
        </hgroup>
      );
    }
  },

  addSongButton () {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <Link to="/new" className="nav-button">ADD SONG</Link>
      );
    } else {
      return (
        <button className="nav-button"
          onClick={this._handleModalClick.bind(this, true)}>
          ADD SONG
        </button>
      );
    }
  },

  render () {
    return (
      <nav className="nav-bar">
        <div className="nav-left-container">
          {this.addSongButton()}
        </div>
        <div className="logo-container">
          <Link to="/" className="nav-logo logo" />
        </div>
        <hgroup className="nav-right-container">
          { this.greeting() }
        </hgroup>
      </nav>
    );
  }
});

module.exports = NavBar;
