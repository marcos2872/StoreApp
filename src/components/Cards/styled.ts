import styled from 'styled-components/native'
import { RFPercentage } from "react-native-responsive-fontsize";

export const  Container = styled.View`
background-color: ${({theme}) => theme.LIGTH.Back};
width: 100%;
gap: 5px;
padding-top: ${RFPercentage(5)}px;
padding-bottom: ${RFPercentage(7)}px;
`

export const Scroll = styled.ScrollView`
background-color: ${({theme}) => theme.LIGTH.Back};
height: 100%;
`
export const Card = styled.TouchableOpacity`
background-color: ${({theme}) => theme.LIGTH.Cards};
width: 90%;
height: ${RFPercentage(50)}px;
border-radius: ${RFPercentage(2)}px;
margin: auto;
margin-top: ${RFPercentage(2)}px;
margin-bottom: ${RFPercentage(2)}px;
justify-content: space-between;
padding-bottom: ${RFPercentage(2)}px;
`
export const Image = styled.Image`
background-color: transparent;
width: 100%;
height: ${RFPercentage(30)}px;
border-radius: ${RFPercentage(2)}px;
border: 1px solid ${({theme}) => theme.LIGTH.Back};
`
export const Title = styled.Text`
font-family: ${({theme}) => theme.FONTS.Bold};
font-size: ${RFPercentage(2.5)}px;
padding-left: ${RFPercentage(2.5)}px;
`
export const Text = styled.Text`
font-family: ${({theme}) => theme.FONTS.Light};
font-size: ${RFPercentage(2)}px;
padding-left: ${RFPercentage(2.5)}px;
`
export const Price = styled.Text`
font-family: ${({theme}) => theme.FONTS.Regular};
font-size: ${RFPercentage(2.5)}px;
padding-left: ${RFPercentage(2.5)}px;
`
