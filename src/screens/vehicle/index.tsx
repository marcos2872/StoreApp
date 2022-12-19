import React from 'react'
import { Container, Carousel, Image, Title, Price, Description, SubTitle, Text, SubDescription, SubDescriptionContainer, FeaturesContainer, Feature, SpecificationContainer } from './styled';
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
        <Image source={{uri: item}} loadingIndicatorSource={require('../../assets/loading.gif')} />
      )}
      />
      <Description>
        <Title>{vehicleData.description.Model}</Title>
        <Price>${vehicleData.description.Price}</Price>
        <SubDescriptionContainer>
          {Object.keys(vehicleData.description).map((curr) => {
            if(curr !== 'Model' && curr !== 'Price' ) {
              const text = vehicleData.description[curr];
              return (
                <SubDescription key={Math.random() * (10 - 1) + 1}>
                  <SubTitle>{curr}</SubTitle>
                  <Text>{text}</Text>
                </SubDescription>
              )
            }
            return null;
          })}
        </SubDescriptionContainer>
        <SpecificationContainer>
        {Object.keys(vehicleData.specifications).map((curr) => {
              const bool = vehicleData.specifications[curr];
              return (
                <Feature key={Math.random() * (10 - 1) + 1}>
                  <SubTitle>{curr}:  </SubTitle>
                  <Text>{bool}</Text>
                </Feature>
              )
            }
          )}
        </SpecificationContainer>
        <FeaturesContainer>
        {Object.keys(vehicleData.features).map((curr) => {
              const bool = vehicleData.features[curr];
              return (
                <Feature key={Math.random() * (10 - 1) + 1}>
                  <SubTitle>{curr}:  </SubTitle>
                  <Text>{bool ? 'sim' : 'não'}</Text>
                </Feature>
              )
            }
          )}
        </FeaturesContainer>
      </Description>

    </Container>
  )
}

export default Vehicle;
