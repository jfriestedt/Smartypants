module.exports = {
  overlay: {
    position                  : 'fixed',
    top                       : 0,
    left                      : 0,
    right                     : 0,
    bottom                    : 0,
    backgroundColor           : 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    position                  : 'absolute',
    top                       : '100px',
    left                      : '200px',
    right                     : '200px',
    bottom                    : '100px',
    background                : 'transparent',
    border                    : '0px solid black',
    borderRadius              : '0',
    outline                   : 'none',
    padding                   : '20px',
    opacity                   : '0',
    transition                : 'opacity 0.5s',
    overflow                  : 'visible'
  }
};
