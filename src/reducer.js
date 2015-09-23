import { Map, fromJS } from 'immutable';
import getNewId from './helpers/get_new_id'

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

function toggleAll(todosState) {
  const hasIncompleteTodos = todosState.some(todo =>
    !todo.get('isComplete')
  );

  return todosState.map(todo =>
    todo.set('isComplete', hasIncompleteTodos)
  );
}

function addTodo(todosState, title) {
  return fromJS([{
    id: getNewId(todosState),
    title: title,
    isComplete: false
  }, ...todosState]);
}

function removeTodo(todosState, id) {
  return todosState.filter(todo =>
    todo.get('id') !== id
  );
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'TOGGLE_COMPLETE':
    return state.update('todos', todosState => toggleComplete(todosState, action.id));
  case 'TOGGLE_ALL':
    return state.update('todos', todosState => toggleAll(todosState));
  case 'ADD_TODO':
    return state.update('todos', todosState => addTodo(todosState, action.title));
  case 'REMOVE_TODO':
    return state.update('todos', todosState => removeTodo(todosState, action.id));
  }
  return state;
}