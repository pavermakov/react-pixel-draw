import React, { Component } from 'react';
import { connect } from 'react-redux';
import Intro from 'components/intro/Intro';

class IntoContainer extends Component {

  render() {
    return (
      <Intro gridOptions={this.props.gridOptions} />
    );
  }

}

const mapStateToProps = ({ intro }) => {
  return {
    gridOptions: intro.gridOptions,
  };
};

export default connect(mapStateToProps)(IntoContainer);
