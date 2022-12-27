import React, { useState } from 'react';
import { Button, Container, Form, Input, Text, Icon, Loading, Link, TextIn } from './styled';

import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import * as EmailValidator from 'email-validator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { setIsLogged } from '../../redux/reduces/userLogged'
import { useDispatch } from 'react-redux'

const SingIn = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation() as {navigate: (para: string) => void};
  const dispatch = useDispatch();

  const handleNewAccount = () => {
  setIsLoading(true)
  try {
    auth().signInWithEmailAndPassword(email, pass)
    .then(async (res) => {
      
      const { _data } = await firestore().collection('users').doc(res.user.uid).get() as unknown as {'_data': any}
      await AsyncStorage.setItem('@cleberapp:user', JSON.stringify({isLogged: true, userId: res.user.uid, user: _data}))
      dispatch(setIsLogged(true))
      navigation.navigate('home')
    })
    .catch((erro) => Alert.alert(erro.message.split("]")[1]))
    .finally(() => setIsLoading(false))

  } catch (error) {
    console.log(error);
  }

  };

  return (
    <Container>
      <Icon source={require('../../assets/entrar-user.png')}/>
      <Form>
      <Input placeholder='E-mail' keyboardType='email-address' onChangeText={(text) => {
        setEmail(text)
      }} />
      <Input placeholder='Password' secureTextEntry={true} onChangeText={(text)  => {
        setPass(text)
      }} />
      {isLoading ? (
        <Button><Loading source={require('../../assets/loading.gif')}/></Button>
      ) : (
      <Button onPress={handleNewAccount} disabled={!(EmailValidator.validate(email) && pass.length >= 6)} >
        <Text>Log In</Text>
      </Button>
      )}
      </Form>
      <Link onPress={() => navigation.navigate('singup')}>
      <TextIn>Create an account</TextIn>
      </Link>
    </Container>
  )
}

export default SingIn
