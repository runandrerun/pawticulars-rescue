import React from 'react';
import ReactDOM from 'react-dom';
import './index.styles.scss';
import App from './components/app/App.component';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
