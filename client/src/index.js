import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';
import reducers from './redux/reducers';
import App from './containers/App';
import Campgrounds from './containers/Campgrounds';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<BrowserRouter>
      <div>
        <Switch>
          <Route path="/campgrounds" component={ Campgrounds }/>
          <Route path="/" component={ App }/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();