import React from 'react';
import PropTypes from 'prop-types';
import './ColorsBarColor.less';

const ColorsBarColor = ({ color, onClick }) => (
  <span className="colors-bar-color border" style={{ 'backgroundColor': color }} onClick={onClick}></span>
);

ColorsBarColor.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
};

ColorsBarColor.defaultProps = {
  color: 'red',
};

export default ColorsBarColor;
