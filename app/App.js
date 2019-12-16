import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import './src/config/ReactotronConfig';
import store from './src/store';

import Routes from './src/routes';
import NavigationService from './src/services/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
}
