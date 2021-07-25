import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import { GlobalStorage } from './store/GlobalContext';
ReactDOM.render(
  <BrowserRouter>
    <GlobalStorage>
      <App />
    </GlobalStorage>
  </BrowserRouter>,
  document.getElementById('root')
);