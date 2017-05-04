import React from 'react';
import ReactDOM from 'react-dom';
import App from './scence/Index/Index.jsx';
import { Provider } from 'react-redux';
import {Router,Route,hashHistory} from 'react-router';
import configureStore from './redux/store.js';
import rootReducer from './redux/reducers.js';

const store = configureStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path={'/'} component={App} />
      <Route path="about" getComponent={(location, cb) => {
        require.ensure([], function(require) {
          cb(null, require('./scence/About/Index.jsx').default);
        });
      }}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
