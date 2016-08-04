module.exports = {
  overlay: {
    position                  : 'fixed',
    top                       : 0,
    left                      : 0,
    right                     : 0,
    bottom                    : 0,
    backgroundColor           : 'rgba(0, 0, 0, 0.5)',
    opacity                   : '0',
    transition                : 'opacity 0.5s'
  },
  content: {
    display                   : 'flex',
    justifyContent            : 'center',
    alignItems                : 'flex-start',
    position                  : 'absolute',
    top                       : '60px',
    left                      : '0',
    right                     : '0',
    bottom                    : '0',
    background                : 'transparent',
    border                    : '0px solid black',
    borderRadius              : '0px',
    outline                   : 'none',
    padding                   : '0px',
    opacity                   : '0',
    transition                : 'opacity 0.5s',
    overflow                  : 'visible'
  }
};
