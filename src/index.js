import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
//import { createDevTools } from 'redux-devtools'
//import LogMonitor from 'redux-devtools-log-monitor'
//import DockMonitor from 'redux-devtools-dock-monitor'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import { App,Home,Todo} from './components'
import * as reducers from './reducers';
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})


//const DevTools = createDevTools(
//  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
//    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
//  </DockMonitor>
//)

const store = createStore(
  reducer//,
  //DevTools.instrument()
)
//<DevTools /> 本来是加在Router下面的
// indexRoute是默认route

const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="todo" component={Todo}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('app')
)



