import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigationStack from './navigation/App.navigation';
import { DependencyInjectionContainer } from './contexts/DependencyInjection.context';
import './i18n/locales/i18n';

function App(): JSX.Element {
  return (
    <DependencyInjectionContainer>
      <NavigationContainer>
        <AppNavigationStack />
      </NavigationContainer>
    </DependencyInjectionContainer>
  );
}

export default App;
