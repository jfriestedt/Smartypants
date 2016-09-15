const Link = require('react-router').Link;
const Modal = require('react-modal');
const ModalStyle = require('./modal_style');
const React = require('react');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const SessionForm = require('./session_form');

const NavBar = React.createClass({
  getInitialState () {
    return({
      modalOpen: false,
      logIn: false,
      addSong: false
    });
  },

  componentDidMount () {
    SessionStore.addListener(this.update);
  },

  contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  closeModal () {
    this.setState({modalOpen: false});
  },

  _guestLogin (e) {
    e.preventDefault();
    let guestUser = { username: "guest", password: "password" };
    SessionActions.login(guestUser);
  },

  _handleLogOut () {
    this.setState({modalOpen: false, addSong: false});
    SessionActions.logout();
  },

  _handleModalClick (bool, addSongBool) {
    this.setState({
       modalOpen: true,
       logIn: bool,
       addSong: addSongBool
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
      logIn: !this.state.logIn
    });
  },

  greeting () {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <hgroup className="nav-right-container">
          <h2 className="nav-button greeting">
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

      let form;
      if (this.state.logIn) {
        form = <SessionForm closeModal={this.closeModal}
                            switchForms={this.switchForms}
                            formType={"login"}/>;
      } else {
        form = <SessionForm closeModal = {this.closeModal}
                            switchForms={this.switchForms}
                            formType={"signup"}/>;
      }

      return (
        <hgroup className="nav-right-container">
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

          <button id="guest-login-button"
                  className="nav-button"
                  onClick={this._guestLogin}>
            GUEST LOGIN
          </button>
          <button id="sign-up-button"
                  className="nav-button"
                  onClick={this._handleModalClick.bind(this, false, false)}>
            SIGN UP
          </button>
          <button id="sign-in-button"
                  className="nav-button"
                  onClick={this._handleModalClick.bind(this, true, false)}>
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
          onClick={this._handleModalClick.bind(this, true, true)}>
          ADD SONG
        </button>
      );
    }
  },

  redirect () {
    if (this.state.addSong) {
      this.context.router.push("/new");
    } else {
      this.context.router.push("/");
    }
  },

  update () {
    this.forceUpdate();
    this.redirect();
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
