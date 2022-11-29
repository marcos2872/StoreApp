import React from 'react'
import { Card, Container, Image, Price, Scroll, Text, Title } from './styled'

const Cards = () => {
  return (
    <Container>
      <Scroll>
        
      <Card>
        <Image />
        <Title>Title</Title>
        <Text>Text</Text>
        <Price>Price</Price>
      </Card>

      <Card>
        <Image />
        <Title>Title</Title>
        <Text>Text</Text>
        <Price>Price</Price>
      </Card>

      <Card>
        <Image />
        <Title>Title</Title>
        <Text>Text</Text>
        <Price>Price</Price>
      </Card>

      <Card>
        <Image />
        <Title>Title</Title>
        <Text>Text</Text>
        <Price>Price</Price>
      </Card>

      </Scroll>
    </Container>
  )
}

export default Cards
