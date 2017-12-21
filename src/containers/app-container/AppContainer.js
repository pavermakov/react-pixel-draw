import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import App from 'components/app/App';
import { canvasActions } from 'store/actions';
import utils from 'utils';

class AppContainer extends Component {
  componentWillMount() {
    const grid = utils.getSavedResults();

    if (grid && grid.length > 0) {
      this.props.setNewGrid(grid);
    }
  }

  render() {
    return (
      <App hasGrid={this.props.hasGrid} />
    );
  }

  static propTypes = {
    hasGrid: PropTypes.bool,
    setNewGrid: PropTypes.func.isRequired,
  };

  static defaultProps = {
    hasGrid: false,
  };
}

const mapStateToProps = ({ canvas }) => {
  return {
    hasGrid: canvas.grid.length > 0,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNewGrid(grid) {
      dispatch(canvasActions.setNewGrid(grid));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
