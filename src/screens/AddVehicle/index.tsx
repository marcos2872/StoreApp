import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import OptionsScreens from '../../components/OptionsScreens'
import { Button, Container, Name, SingOut, SingOutIcon, Text } from './styled'
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddVehicle = () => {

  const vehicle = {
    specifications: {
      'Engine Type': '',
      'No. of cylinder': '',
      'Fuel Type': '',
      'Max Torque': '',
      'Transmission Type': '',
      'Gear Box': '',
      'Drive Type': '',
      'Fuel Tank Capacity': '',
      'Max Power': '',
      'Seating Capacity': '',
      'Boot Space (Litres)': '',
      'Body Type': '',
    },
    features: {
      'Power Steering': false,
      'Air Conditioner': false,
      'Anti Lock Braking System': false,
      'Passenger Airbag': false,
      'Fog Lights - Front': false,
      'Power Windows Front': false,
      'Wheel Covers': false,
      'Driver Airbag': false,
      'Automatic Climate Control': false
    },
    description: {
      Make: '',
      Model: '',
      Variant: '',
      Color: '',
      Odometer: '',
      Year: '',
    }
  }

  return (
    <Container>
      <OptionsScreens />
    </Container>
  )
}

export default AddVehicle;
