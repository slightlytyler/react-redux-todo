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

});