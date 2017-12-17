import { combineReducers } from 'redux';
import canvas from './canvas';
import colorsBar from './colorsBar';
import intro from './intro';

export default combineReducers({
  canvas,
  colorsBar,
  intro,
});
