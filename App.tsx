import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import theme from './src/theme/'
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return null ;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" backgroundColor={theme.LIGTH.Back} />
      <Provider store={store}>
        <Routes />
      </Provider>

    </ThemeProvider>
  );
}
