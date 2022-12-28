// import { StatusBar } from 'expo-status-bar';
import React from 'react'
import Cards from "../../components/Cards";
import OptionsScreens from "../../components/OptionsScreens";
import { Container } from "./styled";
import theme from '../../theme'

const Home = () => {
  return (
    <Container>
      {/* <StatusBar style="auto" backgroundColor={theme.LIGTH.Back} /> */}
      <Cards search=''/>
      <OptionsScreens />
    </Container>
  )
}

export default Home
