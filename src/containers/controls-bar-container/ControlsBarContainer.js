import React, { Component } from 'react';
import { connect } from 'react-redux';
import { canvasActions } from 'store/actions';
import ControlsBar from 'components/controls-bar/ControlsBar';

class ControlsBarContainer extends Component {
  render() {
    return (
      <ControlsBar onReset={this.handleReset} />
    );
  }

  handleReset = () => {
    const { defaultColor, resetGrid } = this.props;

    resetGrid(defaultColor);
  };
}

const mapStateToProps = (state) => {
  return {
    defaultColor: state.canvas.defaultColor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetGrid(color) {
      dispatch(canvasActions.resetGrid(color));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlsBarContainer);
