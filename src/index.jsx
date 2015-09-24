import React from 'react';
import Router, {Route, DefaultRoute} from 'react-router';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

import { fromJS } from 'immutable';

import { setState } from './actions/todos';

import App from './components/App';
import { MainContainer } from './components/Main';

require('./styles.css');

const store = createStore(reducer);
store.dispatch(setState({
  todos: [{
    id: 1,
    title: 'Learn react and redux',
    isComplete: true
  }, {
    id: 2,
    title: '...',
    isComplete: true
  }, {
    id: 3,
    title: 'Profit',
    isComplete: false
  }]
}));

const routes = <Route handler={App}>
  <DefaultRoute handler={MainContainer} />

  <Route path="/all" handler={MainContainer} />
  <Route path="/active" handler={MainContainer} />
  <Route path="/completed" handler={MainContainer} />
</Route>;

Router.run(routes, (Root) => {
  React.render(
    <Provider store={store}>
      {() => <Root />}
    </Provider>,
    document.getElementById('app')
  );
});