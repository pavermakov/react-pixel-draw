import React, { Component } from 'react';
import { connect } from 'react-redux';
import Canvas from 'components/canvas/Canvas';
import { canvasActions } from 'store/actions';

class CanvasContainer extends Component {
  componentWillMount() {
    this.createGrid();
  }

  render() {
    return (
      <Canvas grid={this.props.grid} />
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
}

const mapStateToProps = (state) => {
  return {
    size: state.canvas.size,
    grid: state.canvas.grid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNewGrid(grid) {
      dispatch(canvasActions.setNewGrid(grid));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CanvasContainer);
