import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { canvasActions } from 'store/actions';
import ControlsBar from 'components/controls-bar/ControlsBar';
import utils from 'utils';

class ControlsBarContainer extends Component {
  render() {
    return (
      <ControlsBar onReset={this.handleReset} onSave={this.handleSave} />
    );
  }

  handleReset = () => {
    const { defaultColor, resetGrid } = this.props;

    resetGrid(defaultColor);
    utils.resetResults();
  };

  handleSave = () => {
    utils.saveResults(this.props.grid);
  };

  static propTypes = {
    resetGrid: PropTypes.func.isRequired,
    defaultColor: PropTypes.string,
    grid: PropTypes.arrayOf(PropTypes.array),
  };

  static defaultProps = {
    defaultColor: 'red',
    grid: [[]],
  };
}

const mapStateToProps = ({ colorsBar, canvas }) => {
  return {
    defaultColor: colorsBar.defaultColor,
    grid: canvas.grid,
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
