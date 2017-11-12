export default {
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'black',
  },
  column: {
    position: 'absolute',
    width: '30%',
    top: 0,
    bottom: 0,
    cursor: 'pointer',
  },
  leftColumn: {
    left: 0,
  },
  rightColumn: {
    right: 0,
  },
  arrowButton: {
    backgroundColor: 'rgba(66,66,66,0.54)',
    borderRadius: 28,
    position: 'absolute',
    top: '50%',
    marginTop: -28,
    height: 56,
    width: 56,
  },
  arrowButtonLeft: {
    left: 28,
  },
  arrowButtonRight: {
    right: 28,
  },
  arrowButtonSvg: {
    fill: 'white',
    position: 'absolute',
    left: 10,
    top: 10,
  },
  image: {
    position: 'absolute',
    visibility: 'hidden',
    opacity: 0,
    transition: 'opacity 500ms ease',
  },
  imageOpen: {
    position: 'absolute',
    visibility: 'initial',
    opacity: 1,
    transition: 'opacity 500ms ease',
  }
};