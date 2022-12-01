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
export const Icon = styled.Image`
width: ${RFPercentage(15)}px;
height: ${RFPercentage(15)}px;
`

export const Form = styled.View`
background-color: transparent;
margin-top: ${RFPercentage(5)}px;
width: 100%;
align-items: center;
justify-content: center;
`

export const Input = styled.TextInput`
background-color: ${({theme}) => theme.LIGTH.Footer};
width: 80%;
border-radius: ${RFPercentage(1)}px;
height: ${RFPercentage(5)}px;
border: 1px solid #939695;
margin-top: ${RFPercentage(2)}px;
padding-left: ${RFPercentage(2)}px;
;
`
export const Button = styled.TouchableOpacity`
background-color: ${({theme}) => theme.LIGTH.Footer};
width: 50%;
height: ${RFPercentage(5)}px;
margin-top: ${RFPercentage(2)}px;
border-radius: ${RFPercentage(1)}px;
border: 3px solid ${(props) => props.disabled ? '#FF0000' : '#00FF15' };
align-items: center;
justify-content: center;
`
export const Text = styled.Text`
color: ${({theme}) => theme.LIGTH.IconText};
font-family: ${({theme}) => theme.FONTS.Medium};
font-size: ${RFPercentage(2.5)}px;
`
export const Link = styled.TouchableOpacity`
width: 50%;
height: ${RFPercentage(5)}px;
align-items: center;
justify-content: center;
margin-top: ${RFPercentage(9)}px;
`

export const TextIn = styled.Text`
color: ${({theme}) => theme.LIGTH.IconText};
font-family: ${({theme}) => theme.FONTS.Medium};
font-size: ${RFPercentage(1.3)}px;
`

export const Loading = styled.Image`
width: ${RFPercentage(5)}px;
height: ${RFPercentage(5)}px;
`
