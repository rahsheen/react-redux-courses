import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxStatusReducer(state = initialState.ajaxStatusReducer, action) {
  if(action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  }

  return state;
}
