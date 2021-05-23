import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyled from './styles/GlobalStyle'
import Typography from './styles/Typography'


ReactDOM.render(
  <>
    <GlobalStyled/>
    <Typography/>
    <App />
  </>,
  document.getElementById('root')
);
 