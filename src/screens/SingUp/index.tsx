import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Input, Text, Icon, Loading, TextIn } from './styled';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import * as EmailValidator from 'email-validator';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SingUp = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState({pass1: '', pass2: ''});
  const [isLoading, setIsLoading] = useState(false);
  const [emailVerify, setEmailVerify] = useState(false);
  const [passVerify, setPassVerify] = useState(false);
  const [name, setName] = useState('')
  
  const navigation = useNavigation() as {navigate: (para: string) => void};

  const handleNewAccount = () => {
  setIsLoading(true)
  try {
    auth()
    .createUserWithEmailAndPassword(email, pass.pass2)
    .then(async (res) => {
      const data = {
        displayName: name,
        email: res.user.email
      }
      await firestore().collection('users').doc(res.user.uid).set(data)
      await AsyncStorage.setItem('@cleberapp:user', JSON.stringify({isLogged: true, userId: res.user.uid}))
      navigation.navigate('home')
    })
    .catch((erro) => Alert.alert(erro.message.split("]")[1]))
    .finally(() => setIsLoading(false));

  } catch (error) {
    console.log(error);
  }

  };

  useEffect(() => {
    if((pass.pass1 === pass.pass2) && pass.pass2 !== '') {
      return setPassVerify(true);
     
    } 
    setPassVerify(false);
  }, [pass])
  
  const heardleEmail = (email: string) => {
      setEmailVerify(EmailValidator.validate(email));
      setEmail(email)
  }

  return (
    <Container>
      <Icon source={require('../../assets/adicionar-usuario.png')}/>
      <Form>
      <Input placeholder='Name' onChangeText={(text) => setName(text)} />
      <Input placeholder='E-mail' keyboardType='email-address' onChangeText={(text) => heardleEmail(text)} />
      {(!emailVerify && email !== '') && (
        <TextIn>invalid e-mail</TextIn>
      )}
      <Input placeholder='Password minimum 6 characters' secureTextEntry={true} onChangeText={(text)  => {
        setPass((prev) => ({
          ...prev,
          pass1: text,
        }))
      }} />
      <Input placeholder='Repeat the Password' secureTextEntry={true} onChangeText={(text)  => {
        setPass((prev) => ({
          ...prev,
          pass2: text,
        }))
      }} />
      {!((pass.pass1 === pass.pass2) && pass.pass2 === '') && (
        <TextIn>different passwords</TextIn>
      )}
      {isLoading ? (
        <Button><Loading source={require('../../assets/loading.gif')}/></Button>
      ) : (
      <Button onPress={handleNewAccount} disabled={!(passVerify && emailVerify)} >
        <Text>Create</Text>
      </Button>
      )}
      </Form>
    </Container>
  )
}

export default SingUp
