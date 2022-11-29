import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Container, Image, Text } from './styled'

const OptionsScreens = () => {
  const navigation = useNavigation() as {navigate: (para: string) => void};
  return (
   <Container>
    <Button onPress={() => navigation.navigate('home')}>
      <Image source={require('../../assets/home.png')}/>
      <Text>Home</Text>
      </Button>

    <Button onPress={() => navigation.navigate('search')}>
      <Image source={require('../../assets/pesquisa.png')}/>
      <Text>Search</Text>
      </Button>

    <Button onPress={() => navigation.navigate('chat')}>
      <Image source={require('../../assets/chat.png')}/>
      <Text>Chat</Text>
      </Button>

    <Button onPress={() => navigation.navigate('account')}>
      <Image source={require('../../assets/conta.png')}/>
      <Text>Account</Text>
      </Button>
   </Container>
  )
}

export default OptionsScreens
