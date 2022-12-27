import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import OptionsScreens from '../../components/OptionsScreens'
import { Button, Container, Name, SingOut, SingOutIcon, Text } from './styled'
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { setIsLogged } from '../../redux/reduces/userLogged'
import { useDispatch } from 'react-redux'

const Account = () => {
  const [logged, setLogged] = useState(false);
  const [userData, setUserData] = useState<any>();
  const navigator = useNavigation() as {navigate: (param: string) => void};
  const dispatch = useDispatch();

  const getUser = async () => {
    const local = await AsyncStorage.getItem('@cleberapp:user') as string;
    const {user, userId, isLogged} = JSON.parse(local);
    if (isLogged) {
      setUserData(user)
      dispatch(setIsLogged(true))
      setLogged(true);
      const { _data } = await firestore().collection('users').doc(userId).get() as unknown as {'_data': any};
      return JSON.stringify(user) !== JSON.stringify(_data) ? setUserData(_data) : null;
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const headlerSingOut = async () => {
    if(!logged) navigator.navigate('singin')
    await AsyncStorage.setItem('@cleberapp:user', JSON.stringify({isLogged: false, userId: ''}))
    dispatch(setIsLogged(false))
    auth().signOut().then(() => navigator.navigate('home'))
  }

  return (
    <Container>
      <Name>{userData && userData.displayName}</Name>
      <SingOut onPress={headlerSingOut}>
        <SingOutIcon source={ logged && require('../../assets/sair.png') }/>
      </SingOut>
      <Text>{userData && userData.email}</Text>
      <OptionsScreens />
    </Container>
  )
}

export default Account
