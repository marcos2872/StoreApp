import React, { useEffect, useState } from 'react'

import { Card, CardLoading, Container, Image, Price, Scroll, Text, Title } from './styled'
import getData from '../../services/getData';
import { useNavigation } from '@react-navigation/native';
import { setData } from '../../redux/reduces/data'
import { useDispatch } from 'react-redux'

const Cards = ({search}: {search: string}) => {
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

  const flash = {
    0: {
      opacity: 1,
    },
    0.5: {
      opacity: 0,
    },
    1: {
      opacity: 1,
    },
  };

  return (
    <Container>
      <Scroll>
        {vehiclesData.length > 0 ? vehiclesData.map((curr) => (
      <Card key={curr.id} onPress={() => navigation.navigate('vehicle', { id: curr.id })} >
        <Image source={{uri: curr.images[0]}}/>
        <Title>{curr.description.Model}</Title>
        <Text>{curr.description.Year}</Text>
        <Price>${curr.description.Price}</Price>
      </Card>
        )) : (
          <>
          <CardLoading animation={flash} iterationCount='infinite' duration={2000} />
          <CardLoading animation={flash} iterationCount='infinite' duration={2000} />
          </>
        )}

      </Scroll>
    </Container>
  );
}

export default Cards;
