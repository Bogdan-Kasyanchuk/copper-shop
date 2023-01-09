/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from 'styles/GlobalStyles';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
);
