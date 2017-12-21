import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { canvasActions } from 'store/actions';
import Canvas from 'components/canvas/Canvas';

class CanvasContainer extends Component {
  render() {
    return (
      <Canvas
        grid={this.props.grid}
        onCellClick={this.handleCellClick}
        onCellEnter={this.handleCellEnter}
      />
    );
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.props.setMouseState.bind(this, true));
    window.addEventListener('mouseup', this.props.setMouseState.bind(this, false));
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.props.setMouseState.bind(this, true));
    window.removeEventListener('mouseup', this.props.setMouseState.bind(this, false));
  }

  handleCellClick = (event) => {
    const { currentColor, setCellColor } = this.props;
    const { row, col } = event.target.dataset;
    const cell = { row: +row, col: +col };

    setCellColor(cell, currentColor);
  };

  handleCellEnter = (event) => {
    if (this.props.isMouseDown) {
      this.handleCellClick(event);
    }
  };

  static propTypes = {
    grid: PropTypes.arrayOf(PropTypes.array).isRequired,
    setCellColor: PropTypes.func.isRequired,
    setMouseState: PropTypes.func.isRequired,
    size: PropTypes.number,
    isMouseDown: PropTypes.bool,
    currentColor: PropTypes.string,
  };

  static defaultProps = {
    size: 10,
    isMouseDown: false,
    currentColor: 'red',
  };
}

const mapStateToProps = ({ canvas, colorsBar }) => {
  return {
    size: canvas.size,
    grid: canvas.grid,
    isMouseDown: canvas.isMouseDown,
    currentColor: colorsBar.currentColor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCellColor(cell, color) {
      dispatch(canvasActions.setCellColor(cell, color));
    },

    setMouseState(isMouseDown) {
      dispatch(canvasActions.setMouseState(isMouseDown));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CanvasContainer);
