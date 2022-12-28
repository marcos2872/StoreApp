import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Button, Container, Image, Text } from './styled'
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OptionsScreens = () => {
  const navigation = useNavigation() as {navigate: (para: string) => void};
  const  { logged }  = useSelector(({ logged }: { logged: boolean; }) => logged) as unknown as {logged: boolean};
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if(logged) {
      (async () => {
        const local = await AsyncStorage.getItem('@cleberapp:user') as string;
        const { user: { isAdmin } } = JSON.parse(local);
        setAdmin(isAdmin)
      })()
    }
    setAdmin(false)
  }, [logged])
  
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

    {admin && (
    <Button onPress={() => navigation.navigate('addvehicle')}>
      <Image source={require('../../assets/addVehicle.png')}/>
      <Text>Vehicle</Text>
    </Button>
    )}

    <Button onPress={() => logged ? navigation.navigate('account') : navigation.navigate('singin') }>
      <Image source={require('../../assets/conta.png')}/>
      <Text>Account</Text>
    </Button>
   </Container>
  )
}

export default OptionsScreens
