import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { enthusiasm } from './reducer'
import { IStoreState } from './types'
import Hello from './containers/Hello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
const store = createStore<IStoreState, any, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
})

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
