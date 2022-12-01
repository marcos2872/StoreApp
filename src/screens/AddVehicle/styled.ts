import styled from 'styled-components/native'
import { RFPercentage } from "react-native-responsive-fontsize";

export const  Container = styled.View`
background-color: ${({theme}) => theme.LIGTH.Back};
flex: 1;
align-items: center;
justify-content: center;
height: 100%;
`
export const Name = styled.Text`
color: ${({theme}) => theme.LIGTH.IconText};
font-size: ${RFPercentage(3.6)}px;
font-family: ${({theme}) => theme.FONTS.Bold};
position: absolute;
top: ${({theme}) => theme.SIZE.statusbar}px;
`
export const SingOut = styled.TouchableOpacity`
position: absolute;
top: ${({theme}) => theme.SIZE.statusbar + 10}px;
right: ${RFPercentage(3.4)}px;

`
export const SingOutIcon = styled.Image`
width: ${RFPercentage(3.4)}px;
height: ${RFPercentage(3.4)}px;
`

export const Text = styled.Text`
color: ${({theme}) => theme.LIGTH.IconText};
font-size: ${RFPercentage(1.6)}px;
font-family: ${({theme}) => theme.FONTS.Regular};
`

export const Button = styled.TouchableOpacity`
background-color: transparent;
width: ${RFPercentage(10)}px;
height: ${RFPercentage(5)}px;
align-items: center;
justify-content: center;
`
