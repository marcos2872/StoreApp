import styled from 'styled-components/native'
import CheckBox from '@react-native-community/checkbox';
import { RFPercentage } from "react-native-responsive-fontsize";

export const  Container = styled.View`
background-color: ${({theme}) => theme.LIGTH.Back};
flex: 1;
align-items: center;
justify-content: center;
height: 100%;
`
export const Section = styled.View`
border: 2px solid ${({theme}) => theme.LIGTH.IconText};
border-radius: ${RFPercentage(1)}px;
padding: ${RFPercentage(1)}px;
margin-bottom: ${RFPercentage(2)}px;
`
export const Form = styled.ScrollView`
/* margin-top: ${({theme}) => theme.SIZE.statusbar}px; */
`
export const Text = styled.Text`
color: ${({theme}) => theme.LIGTH.IconText};
font-size: ${RFPercentage(2)}px;
font-family: ${({theme}) => theme.FONTS.Regular};
`
export const Input = styled.TextInput`
border: 2px solid ${({theme}) => theme.LIGTH.IconText};
border-radius: ${RFPercentage(1)}px;
width: ${RFPercentage(45)}px;
`
export const InputConteiner = styled.View`
margin-top: ${RFPercentage(2)}px;
justify-content: center;
`
export const Title = styled.Text`
color: ${({theme}) => theme.LIGTH.IconText};
font-size: ${RFPercentage(3)}px;
font-family: ${({theme}) => theme.FONTS.Regular};
`
export const Swit = styled(CheckBox)`
`
export const Button = styled.TouchableOpacity`
background-color: transparent;
width: ${RFPercentage(10)}px;
height: ${RFPercentage(5)}px;
align-items: center;
justify-content: center;
`
