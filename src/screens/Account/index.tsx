import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import OptionsScreens from '../../components/OptionsScreens'
import { Button, Container, Name, SingOut, SingOutIcon, Text } from './styled'
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

const Account = () => {
  const [logget, setLogged] = useState(false);
  const [userData, setUserData] = useState<any>();
  const navigator = useNavigation() as {navigate: (param: string) => void};

  const getUser = async () => {
    const local = await AsyncStorage.getItem('@cleberapp:user') as string;
    const {userId, isLogged} = JSON.parse(local);
    if (isLogged) {
      setLogged(true);
      const {_data} = await firestore().collection('users').doc(userId).get() as unknown as {'_data': any};
      return setUserData(_data);
    }
    return null
  }

  useEffect(() => {
    getUser();
  }, []);

  const headlerSingOut = async () => {
    if(!logget) navigator.navigate('singin')
    await AsyncStorage.setItem('@cleberapp:user', JSON.stringify({isLogged: false, userId: ''}))
    auth().signOut().then(() => navigator.navigate('home'))
  }

  return (
    <Container>
      <Name>{userData ? userData.displayName : 'not logged in'}</Name>
      <SingOut onPress={headlerSingOut}>
        <SingOutIcon source={logget? require('../../assets/sair.png') : require('../../assets/entrar-user.png')  }/>
      </SingOut>
      <Text>{userData && userData.email}</Text>
      <Button onPress={() => navigator.navigate('addvehicle')}>
        <Text>add vehicle</Text>
      </Button>
      <OptionsScreens />
    </Container>
  )
}

export default Account
