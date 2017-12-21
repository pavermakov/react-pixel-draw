import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Intro from 'components/intro/Intro';
import { introActions, canvasActions } from 'store/actions';

class IntroContainer extends Component {
  render() {
    const { isGridSelected, gridOptions } = this.props;

    return (
      <Intro
        isGridSelected={isGridSelected}
        gridOptions={gridOptions}
        onGridSelect={this.handleGridSelect}
        onProceed={this.handleProceed}
      />
    );
  }

  handleGridSelect = (event) => {
    this.props.selectGrid(event.target.dataset.gridType);
  };

  handleProceed = () => {
    const { createGrid, selectedGrid, defaultColor } = this.props;
    createGrid(selectedGrid.size, defaultColor);
  };

  static propTypes = {
    gridOptions: PropTypes.arrayOf(PropTypes.shape({ type: PropTypes.string, size: PropTypes.number })).isRequired,
    selectedGrid: PropTypes.shape({ type: PropTypes.string, size: PropTypes.number, isSelected: PropTypes.bool }),
    createGrid: PropTypes.func.isRequired,
    selectGrid: PropTypes.func.isRequired,
    defaultColor: PropTypes.string,
    isGridSelected: PropTypes.bool,
  };

  static defaultProps = {
    selectedGrid: {
      type: 'small',
      size: 10,
      isSelected: true,
    },
    defaultColor: 'red',
    isGridSelected: false,
  };
}

const mapStateToProps = ({ intro, colorsBar }) => {
  return {
    defaultColor: colorsBar.defaultColor,
    isGridSelected: intro.gridOptions.some(option => option.isSelected),
    gridOptions: intro.gridOptions,
    selectedGrid: intro.gridOptions.find(option => option.isSelected),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createGrid(size, defaultColor) {
      dispatch(canvasActions.createGrid(size, defaultColor));
    },

    selectGrid(gridType) {
      dispatch(introActions.selectGrid(gridType));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroContainer);
