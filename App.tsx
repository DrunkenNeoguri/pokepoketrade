import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Navigation from './navigation';
import {TanStackQueryProvider} from './providers/tanstack-query-provider';

export default function App() {
  return (
    <NavigationContainer>
      <TanStackQueryProvider>
        <Navigation />
      </TanStackQueryProvider>
    </NavigationContainer>
  );
}
