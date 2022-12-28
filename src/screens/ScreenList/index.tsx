import { View, Text } from 'react-native'
import React from 'react'
import Cards from '../../components/Cards'
import { useRoute } from '@react-navigation/native';
import { Container } from './styled';
import OptionsScreens from '../../components/OptionsScreens';

const ScreenList = () => {
  const { params: { search } } = useRoute() as { params: { search: string } };
  console.log(search);
  
  return (
    <Container>
      <Cards search={search}/>
      <OptionsScreens />
    </Container>
  )
}

export default ScreenList