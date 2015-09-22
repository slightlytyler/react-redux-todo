import { Map } from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function toggleComplete(todosState, id) {
  return todosState.map(todo =>
      todo.get('id') === id ?
      todo.set('isComplete', !todo.get('isComplete')) :
      todo
  );
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'TOGGLE_COMPLETE':
    return state.update('todos', todosState => toggleComplete(todosState, action.id));
  }
  return state;
}