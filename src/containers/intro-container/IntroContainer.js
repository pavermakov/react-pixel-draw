import React, { Component } from 'react';
import { connect } from 'react-redux';
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
}

const mapStateToProps = ({ intro, colorsBar }) => {
  return {
    defaultColor: colorsBar.defaultColor,
    isGridSelected: intro.gridOptions.some(option => option.isSelected),
    gridOptions: intro.gridOptions,
    selectedGrid: intro.gridOptions.filter(option => option.isSelected)[0],
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
