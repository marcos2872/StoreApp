import React from 'react'
import { Container, Carousel, Image } from './styled';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { vehicleType } from '../../types/vehicle'
import theme from '../../theme'

const Vehicle = () => {
  const { params: { id } } = useRoute() as { params: { id: string } };
  const  { data }  = useSelector(({ data }: any) => data) as { data: void[] };

  const vehicleData = data.find(({ id: vId }: any) => vId === id) as unknown as vehicleType;
 
  return (
    <Container>
      <Carousel
      keyExtractor={(item) => String(item)}
      showsHorizontalScrollIndicator={false}
      horizontal
      snapToOffsets={[...Array(vehicleData.images.length)].map(
        (_curr, indx) => indx * (theme.SIZE.window - 1) + (indx -1 ) * 2
        )}
      snapToAlignment={'start'}
      scrollEventThrottle={16}
      decelerationRate='fast'
      data={vehicleData.images}
      renderItem={({item}: any) => (
        <Image source={{uri: item}} />
      )}
      />

    </Container>
  )
}

export default Vehicle;
