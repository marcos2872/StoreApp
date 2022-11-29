import styled from 'styled-components/native'
import { RFPercentage } from "react-native-responsive-fontsize";

export const  Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;
height: 100%;
`
export const Text = styled.Text`
color: ${({theme}) => theme.LIGTH.IconText};
font-size: ${RFPercentage(1.6)}px;
font-family: ${({theme}) => theme.FONTS.Regular};
`
export const Button = styled.TouchableOpacity`
background-color: transparent;
width: ${RFPercentage(7)}px;
height: ${RFPercentage(5)}px;
align-items: center;
justify-content: center;
`
