import React, { useState } from 'react';
import { Button, Container, Form, Input, Text, Icon, Loading } from './styled';

import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

type userType = {
  email: string;
  password: string;
}

const SingUp = () => {
  const [user, setUser] = useState<userType>({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false)

  const handleNewAccount = () => {
  setIsLoading(true)
  try {
    auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(() => Alert.alert('Account created successfully'))
    .catch((erro) => Alert.alert(erro.message.split("]")[1]))
    .finally(() => setIsLoading(false))

  } catch (error) {
    console.log(error);
  }

  };

  return (
    <Container>
      <Icon source={require('../../assets/adicionar-usuario.png')}/>
      <Form>
      <Input placeholder='E-mail' keyboardType='email-address' onChangeText={(text) => {
        setUser((prev) => ({
          ...prev,
          email: text,
        }))
      }} />
      <Input placeholder='Password' textContentType='password' onChangeText={(text)  => {
        setUser((prev) => ({
          ...prev,
          password: text,
        }))
      }} />
      {isLoading ? (
        <Button><Loading source={require('../../assets/loading.gif')}/></Button>
      ) : (
      <Button onPress={handleNewAccount} >
        <Text>Create</Text>
      </Button>
      )}
      </Form>
    </Container>
  )
}

export default SingUp
