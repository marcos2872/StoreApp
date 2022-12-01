import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import OptionsScreens from '../../components/OptionsScreens'
import { Button, Container, Name, SingOut, SingOutIcon, Text } from './styled'
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

const AddVehicle = () => {


  return (
    <Container>
      <OptionsScreens />
    </Container>
  )
}

export default AddVehicle;
