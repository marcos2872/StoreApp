import React, { useState } from 'react';
import { Button, Container, Form, Input, Text, Icon, Loading } from './styled';

import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

type userType = {
  email: string;
  password: string;
}

const SingIn = () => {
  const [user, setUser] = useState<userType>({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false)

  const handleNewAccount = () => {
    Alert.alert('Função não implementada')
  // setIsLoading(true)
  // try {
  //   auth()
  //   .createUserWithEmailAndPassword(user.email, user.password)
  //   .then(() => Alert.alert('Account created successfully'))
  //   .finally(() => setIsLoading(false))

  // } catch (error) {
  //   console.log(error);
  //   Alert.alert('error')
  //   setIsLoading(false);
  // }


  };

  return (
    <Container>
      <Icon source={require('../../assets/entrar-user.png')}/>
      <Form>
      <Input placeholder='E-mail' keyboardType='email-address' onChangeText={(text) => {
        setUser((prev) => ({
          ...prev,
          email: text,
        }))
      }} />
      <Input placeholder='Password' onChangeText={(text)  => {
        setUser((prev) => ({
          ...prev,
          password: text,
        }))
      }} />
      {isLoading ? (
        <Button><Loading source={require('../../assets/loading.gif')}/></Button>
      ) : (
      <Button onPress={handleNewAccount} >
        <Text>Log In</Text>
      </Button>
      )}
      </Form>
    </Container>
  )
}

export default SingIn
