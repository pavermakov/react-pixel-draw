import { combineReducers } from 'redux';
import canvas from './canvas';
import colorsBar from './colorsBar';

export default combineReducers({
  canvas,
  colorsBar,
});
