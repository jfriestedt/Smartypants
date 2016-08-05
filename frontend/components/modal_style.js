module.exports = {
  overlay: {
    position                  : 'fixed',
    top                       : 0,
    left                      : 0,
    right                     : 0,
    bottom                    : 0,
    backgroundColor           : 'rgba(0, 0, 0, 0.5)',
    opacity                   : '0',
    transition                : 'opacity 0.5s',
    zIndex                    : '2'
  },
  content: {
    display                   : 'flex',
    justifyContent            : 'center',
    alignItems                : 'flex-start',
    position                  : 'absolute',
    top                       : '-90px',
    width                     : '485px',
    height                    : '399px',
    margin                    : 'auto',
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
    overflow                  : 'visible',
    zIndex                    : '3'
  }
};
