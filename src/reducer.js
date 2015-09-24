import { Map, List, fromJS } from 'immutable';
import getNewId from './helpers/get_new_id'

function setState(state, newState) {
  return state.merge(newState);
}

function toggleComplete(todosState, id) {
  const ids = List.isList(id) ? id : List.of(id);
  const currentTodos = todosState.filter((todo) => {
    return ids.includes(todo.get('id'))
  });
  const hasIncompleteTodos = currentTodos.some(todo =>
    !todo.get('isComplete')
  );

  return todosState.map(todo =>
    currentTodos.includes(todo) ?
    todo.set('isComplete', hasIncompleteTodos) :
    todo
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

function removeComplete(todosState) {
  return todosState.filter(todo =>
    !todo.get('isComplete')
  );
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'TOGGLE_COMPLETE':
    return state.update('todos', todosState => toggleComplete(todosState, action.id));
  case 'ADD_TODO':
    return state.update('todos', todosState => addTodo(todosState, action.title));
  case 'REMOVE_TODO':
    return state.update('todos', todosState => removeTodo(todosState, action.id));
  case 'REMOVE_COMPLETE':
    return state.update('todos', todosState => removeComplete(todosState));
  }
  return state;
}