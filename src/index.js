import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {AppProvider} from './context'
import {store} from './store'
import {Provider} from 'react-redux'
import {useSelector} from 'react-redux'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
