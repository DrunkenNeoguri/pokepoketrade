import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Navigation from './navigation';
import {TanStackQueryProvider} from './providers/tanstack-query-provider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <TanStackQueryProvider>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </BottomSheetModalProvider>
      </TanStackQueryProvider>
    </GestureHandlerRootView>
  );
}
