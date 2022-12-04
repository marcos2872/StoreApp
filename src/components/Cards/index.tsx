import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import storage, { FirebaseStorageTypes } from '@react-native-firebase/storage';

import { Card, Container, Image, Price, Scroll, Text, Title } from './styled'

const Cards = () => {
  const [vehiclesData, setVehiclesData] = useState<any[]>([])

  useEffect(() => {

    const teste = async () => {
      const data: any = []
      const snapshot = await firestore().collection('vehicles').get()
        snapshot.forEach(doc => {
          data.push({id: doc.id, ...doc.data()})
        })

      const allVehicles = await Promise.all(data.map(async (curr: any) => {
        const list = await storage().ref(`${curr.description.Model}vehicles,${curr.id}`).list()
        const urls = await Promise.all(list.items.map(async (ref: { fullPath: any; }) => {
              const url = await storage().ref(ref.fullPath).getDownloadURL()
                return url;
              }));
            return {...curr, images: urls}
          }))
          setVehiclesData(allVehicles) 
    }
        teste()
  }, [])
// console.log(vehiclesData);

  return (
    <Container>
      <Scroll>
        {vehiclesData.length > 0 && vehiclesData.map((curr) => (
      <Card key={curr.id}>
        <Image source={{uri: curr.images[0]}}/>
        <Title>{curr.description.Model}</Title>
        <Text>{curr.description.Year}</Text>
        <Price>${curr.description.Price}</Price>
      </Card>
        ))}

      </Scroll>
    </Container>
  )
}

export default Cards
