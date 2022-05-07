import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';

ReactDOM.hydrate(
  <>
    <GlobalStyles />
    <Typography />
    <App />
  </>,
  document.getElementById('root')
);
