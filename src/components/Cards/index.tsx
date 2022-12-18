import React, { useEffect, useState } from 'react'

import { Card, Container, Image, Price, Scroll, Text, Title } from './styled'
import getData from '../../services/getData';
import { useNavigation } from '@react-navigation/native';
import { setData } from '../../redux/reduces/data'
import { useDispatch } from 'react-redux'

const Cards = () => {
  const [vehiclesData, setVehiclesData] = useState<any[]>([]);
  const navigation = useNavigation() as {navigate: (para: string, { }) => void};
  const dispatch = useDispatch();

  useEffect(() => {
    const get = async () => {
      const allVehicles = await getData();
      setVehiclesData(allVehicles);
      dispatch(setData(allVehicles))
    }
        get();
  }, [])

  return (
    <Container>
      <Scroll>
        {vehiclesData.length > 0 && vehiclesData.map((curr) => (
      <Card key={curr.id} onPress={() => navigation.navigate('vehicle', { id: curr.id })} >
        <Image source={{uri: curr.images[0]}}/>
        <Title>{curr.description.Model}</Title>
        <Text>{curr.description.Year}</Text>
        <Price>${curr.description.Price}</Price>
      </Card>
        ))}

      </Scroll>
    </Container>
  );
}

export default Cards;
