import React, { useEffect, useState } from 'react'

import { Card, CardLoading, Container, Image, Price, Scroll, Text, Title } from './styled'
import getData from '../../services/getData';
import { useNavigation } from '@react-navigation/native';
import { setData } from '../../redux/reduces/data'
import { useDispatch, useSelector } from 'react-redux'

const Cards = ({search}: {search: string}) => {
  const [vehiclesData, setVehiclesData] = useState<any[]>([]);
  const navigation = useNavigation() as {navigate: (para: string, { }) => void};
  const dispatch = useDispatch();

  const getFilter = async () => {
    console.log('filtro');
    
    const allVehicles = await getData();
    const filterVehicles = allVehicles.filter(({description: {Make, Model}}) =>
     Make.toUpperCase().includes(search.toUpperCase()) ||
     Model.toUpperCase().includes(search.toUpperCase()) )
    setVehiclesData(filterVehicles);
  }

  const get = async () => {
    console.log('teste');
    
    if(search) {
      return getFilter()
    }
    const allVehicles = await getData();
    setVehiclesData(allVehicles);
    dispatch(setData(allVehicles))
  }

  useEffect(() => {
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
    <Container search={search ? true : false}>
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
