import React, { Component } from 'react';
import { connect } from 'react-redux';
import { canvasActions } from 'store/actions';
import Canvas from 'components/canvas/Canvas';

class CanvasContainer extends Component {
  componentWillMount() {
    this.createGrid();
  }

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

  createGrid = () => {
    const { size } = this.props;
    const newGrid = [];
    const defaultColor = 'white';

    for (let row = 0; row < size; row += 1) {
      newGrid.push([]);

      for (let col = 0; col < size; col += 1) {
        newGrid[row][col] = defaultColor
      }
    }

    this.props.setNewGrid(newGrid);
  };

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
    setNewGrid(grid) {
      dispatch(canvasActions.setNewGrid(grid));
    },

    setCellColor(cell, color) {
      dispatch(canvasActions.setCellColor(cell, color));
    },

    setMouseState(isMouseDown) {
      dispatch(canvasActions.setMouseState(isMouseDown));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CanvasContainer);
