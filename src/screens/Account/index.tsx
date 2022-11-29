import React from 'react'
import { useNavigation } from '@react-navigation/native'
import OptionsScreens from '../../components/OptionsScreens'
import { Button, Container, Text } from './styled'

const Account = () => {
  const navigator = useNavigation() as {navigate: (param: string) => void};
  return (
    <Container>
      <Button onPress={() => navigator.navigate('singup')}>
        <Text>SingUp</Text>
      </Button>
      <Button onPress={() => navigator.navigate('singin')}>
        <Text>SingIn</Text>
      </Button>
      <OptionsScreens />
    </Container>
  )
}

export default Account
