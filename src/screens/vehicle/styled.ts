import styled from 'styled-components/native'
import { RFPercentage } from "react-native-responsive-fontsize";

export const  Container = styled.ScrollView`
background-color: ${({theme}) => theme.LIGTH.Back};
/* flex: 1; */
/* flex-direction: column; */
/* align-items: center; */
/* justify-content: center; */
/* height: 100%; */
/* width: 100%; */
`
export const Carousel = styled.FlatList`
max-height: ${({theme}) => theme.SIZE.window * 0.75}px;
`
export const Image = styled.Image`
background-color: ${({theme}) => theme.LIGTH.Cards};
width: ${({theme}) => theme.SIZE.window - 20}px;
height: ${({theme}) => theme.SIZE.window * 0.7}px;
border-radius: 10px;
margin: 10px ;
`
export const Description = styled.View`
width: ${({theme}) => theme.SIZE.window}px;
flex: 1;
margin-top: 0px;
padding-left: ${RFPercentage(2)}px;
padding-right: ${RFPercentage(2)}px;
`
export const Title = styled.Text`
font-family: ${({theme}) => theme.FONTS.Bold};
font-size: ${RFPercentage(3)}px;
margin-bottom: ${RFPercentage(1)}px;
`
export const Price = styled.Text`
font-family: ${({theme}) => theme.FONTS.Regular};
font-size: ${RFPercentage(4)}px;
`
export const SubDescriptionContainer = styled.View`
margin-top: ${RFPercentage(5)}px;
max-height: ${RFPercentage(15)}px;
flex-wrap: wrap;
flex-direction: row;
flex: 1;
`
export const SubDescription = styled.View`
flex: 1;
min-width: ${RFPercentage(10)}px;
margin-top: 10px;
align-items: center;

`
export const SubTitle = styled.Text`
font-family: ${({theme}) => theme.FONTS.Medium};
font-size: ${RFPercentage(2)}px;
`
export const Text = styled.Text`
font-family: ${({theme}) => theme.FONTS.Light};
font-size: ${RFPercentage(1.5)}px;
`
