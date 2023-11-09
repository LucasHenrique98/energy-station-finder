import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigationStack from './navigation/App.navigation';
import { DependencyInjectionContainer } from './contexts/DependencyInjection.context';

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
