import * as types from '../constants/action_types';

export function setState(state) {
  return { type: types.SET_STATE, state };
}

export function toggleComplete(id) {
  return { type: types.TOGGLE_COMPLETE, id };
}

