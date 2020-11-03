import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';

import AppProvider from './hooks';
import Routes from './routes';
import store from './store';

const App: React.FC = () => (
  <Router>
    <Provider store={store}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </Provider>
    <GlobalStyle />
  </Router>
);

export default App;
