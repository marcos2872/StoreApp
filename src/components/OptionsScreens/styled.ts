import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
background-color: ${({theme}) => theme.LIGTH.Footer};
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100%;
height: ${RFPercentage(7)}px;
bottom: 0px;
position: absolute;
`
export const Button = styled.TouchableOpacity`
background-color: transparent;
width: ${RFPercentage(7)}px;
height: ${RFPercentage(5)}px;
align-items: center;
justify-content: center;
`
export const Image = styled.Image`
color: ${({theme}) => theme.LIGTH.IconText};
width: ${RFPercentage(2.4)}px;
height: ${RFPercentage(2.4)}px;
`
export const Text = styled.Text`
color: ${({theme}) => theme.LIGTH.IconText};
font-size: ${RFPercentage(1.6)}px;
font-family: ${({theme}) => theme.FONTS.Regular};
`
