import React, { Component } from 'react';
import { connect } from 'react-redux';
import { colorsBarActions } from 'store/actions';
import ColorsBar from 'components/colors-bar/ColorsBar';

class ColorBarContainer extends Component {
  render() {
    const { availableColors, currentColor } = this.props;

    return (
      <ColorsBar
        availableColors={availableColors}
        currentColor={currentColor}
        onColorSelect={this.handleColorSelect}
      />
    );
  }

  handleColorSelect = (event) => {
    this.props.setCurrentColor(event.target.style.backgroundColor);
  };
}

const mapStateToProps = (state) => {
  return {
    availableColors: state.colorsBar.availableColors,
    currentColor: state.colorsBar.currentColor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentColor(color) {
      dispatch(colorsBarActions.setCurrentColor(color));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorBarContainer);
