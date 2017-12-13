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
      />
    );
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
}

const mapStateToProps = (state) => {
  return {
    size: state.canvas.size,
    grid: state.canvas.grid,
    currentColor: state.colorsBar.currentColor,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CanvasContainer);
