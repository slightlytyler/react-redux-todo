import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: fromJS({
        todos: [{
          title: 'Learn react and redux',
          isComplete: true
        }, {
          title: '...',
          isComplete: true
        }, {
          title: 'Profit',
          isComplete: false
        }]
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      todos: [{
        title: 'Learn react and redux',
        isComplete: true
      }, {
        title: '...',
        isComplete: true
      }, {
        title: 'Profit',
        isComplete: false
      }]
    }));
  });

  it('handles SET_STATE with JS payload', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: fromJS({
        todos: [{
          title: 'Learn react and redux',
          isComplete: true
        }, {
          title: '...',
          isComplete: true
        }, {
          title: 'Profit',
          isComplete: false
        }]
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      todos: [{
        title: 'Learn react and redux',
        isComplete: true
      }, {
        title: '...',
        isComplete: true
      }, {
        title: 'Profit',
        isComplete: false
      }]
    }));
  });

  it('handles SET_STATE without initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: fromJS({
        todos: [{
          title: 'Learn react and redux',
          isComplete: true
        }, {
          title: '...',
          isComplete: true
        }, {
          title: 'Profit',
          isComplete: false
        }]
      })
    };
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      todos: [{
        title: 'Learn react and redux',
        isComplete: true
      }, {
        title: '...',
        isComplete: true
      }, {
        title: 'Profit',
        isComplete: false
      }]
    }));
  });

  it('handles TOGGLE_COMPLETE by toggling the value of isComplete', () => {
    const state = fromJS({
      todos: [{
        id: 1,
        title: 'Learn react and redux',
        isComplete: false
      }, {
        id: 2,
        title: '...',
        isComplete: false
      }, {
        id: 3,
        title: 'Profit',
        isComplete: false
      }]
    });
    const action = {type: 'TOGGLE_COMPLETE', id: 1};
    const nextState = reducer(state, action);

    expect(nextState).to.equal(fromJS({
      todos: [{
        id: 1,
        title: 'Learn react and redux',
        isComplete: true
      }, {
        id: 2,
        title: '...',
        isComplete: false
      }, {
        id: 3,
        title: 'Profit',
        isComplete: false
      }]
    }));
  });

});