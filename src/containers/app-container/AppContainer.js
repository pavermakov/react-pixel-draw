import React from 'react';
import { connect } from 'react-redux';
import App from 'components/app/App';

const AppContainer = ({ hasGrid }) => (
  <App hasGrid={hasGrid} />
);

const mapStateToProps = ({ canvas }) => {
  return {
    hasGrid: canvas.grid.length > 0,
  };
};

export default connect(mapStateToProps)(AppContainer);
