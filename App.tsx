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
import Home from './src/screens/Home';
import SingUp from './src/screens/SingUp';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  if (!fontsLoaded) {
    return null ;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" backgroundColor={theme.LIGTH.Back} />
      <Routes />
      {/* <Home /> */}
    </ThemeProvider>
  );
}
