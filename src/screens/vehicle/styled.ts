import styled from 'styled-components/native'
import { RFPercentage } from "react-native-responsive-fontsize";

export const  Container = styled.View`
background-color: ${({theme}) => theme.LIGTH.Back};
flex: 1;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
`

export const Carousel = styled.FlatList`
`
export const Image = styled.Image`
background-color: ${({theme}) => theme.LIGTH.Back};
width: ${({theme}) => theme.SIZE.window - 20};
height: ${({theme}) => theme.SIZE.window * 0.7};
border-radius: 10px;
margin: 10px ;
`