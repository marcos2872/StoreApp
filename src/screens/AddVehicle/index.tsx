import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Container, Form, Input, InputConteiner, Section, Swit, Text, Title } from './styled'
import firestore from '@react-native-firebase/firestore';
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import { firebase } from '@react-native-firebase/auth';
import { Alert } from 'react-native';

const featuresList = ["Power Steering", "Air Conditioner", "Anti Lock Braking System", "Passenger Airbag", "Fog Lights - Front", "Power Windows Front", "Wheel Covers", "Driver Airbag", "Automatic Climate Control"]
const specificationsList = ["Engine Type", "No. of cylinder", "Fuel Type", "Max Torque", "Transmission Type", "Gear Box", "Drive Type", "Fuel Tank Capacity", "Max Power", "Body Type", "Boot Space (Litres)", "Seating Capacity"]
const descriptionList = ["Make", "Model", "Variant", "Color", "Odometer", "Year"]

type dataType  = {
  _documentPath: {
    _parts: string[]
  }
}

const AddVehicle = () => {
  const [specifications, setSpecifications] = useState({
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
    });
    const [features, setFeatures] = useState({
      'Power Steering': false,
      'Air Conditioner': false,
      'Anti Lock Braking System': false,
      'Passenger Airbag': false,
      'Fog Lights - Front': false,
      'Power Windows Front': false,
      'Wheel Covers': false,
      'Driver Airbag': false,
      'Automatic Climate Control': false
    })
    const [description, setDescription] = useState({
      Make: '',
      Model: '',
      Variant: '',
      Color: '',
      Odometer: '',
      Year: '',
    })

    const [image, setImage] = useState<string[]>([])

    const [progress, setProgress] = useState<string[]>([])

  const headlerSave = async () => {
    let count = 1;
    try {
      const { _documentPath: { _parts } } = await firestore()
      .collection('vehicles').add({ description, features, specifications }) as unknown as dataType;
      image.forEach(async (element) => {
        const reference = storage().ref(`${description.Model + _parts}/image${count}`);
        count += 1;
        await reference.putFile(element)
        setProgress((prev) => [...prev, 'sucess'])
      });
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (progress.length !== 0 && progress.length === image.length) {
      Alert.alert('terminou');
    }

  }, [progress])

  const headlerUploadImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage((prev) => [...prev, result.assets[0].uri]);
    }
    
  }

  return (
    <Container>
      <Form>
        <Section>
          <Title>Description</Title>
        {descriptionList.map((curr: string) => (
          <InputConteiner key={curr}>
            <Text>{curr}</Text>
            <Input value={description[curr]} onChangeText={(value) => setDescription((prev) => ({...prev, [curr]: value }))} />
          </InputConteiner>
        ))}
        </Section>
        <Section>
          <Title>Specifications</Title>
        {specificationsList.map((curr) => (
          <InputConteiner key={curr}>
            <Text>{curr}</Text>
            <Input value={specifications[curr]} onChangeText={(value) => setSpecifications((prev) => ({...prev, [curr]: value }))} />
          </InputConteiner>
        ))}
        </Section>
        <Section>
          <Title>Features</Title>
        {featuresList.map((curr: string) => (
          <InputConteiner key={curr}>
            <Text>{curr}</Text>
            <Swit value={features[curr]}onValueChange={() => setFeatures((prev) => ({...prev, [curr]: !prev[curr]}))} />
          </InputConteiner>
        ))}
        </Section>

      <Button onPress={headlerUploadImage}>
        <Text>Upload Image</Text>
      </Button>

      <Button onPress={headlerSave}>
        <Text>Save</Text>
      </Button>
      </Form>

    </Container>
  )
}

export default AddVehicle;
