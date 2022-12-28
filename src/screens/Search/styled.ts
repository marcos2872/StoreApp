import styled from 'styled-components/native'
import { StatusBar } from "expo-status-bar";
import { RFPercentage } from "react-native-responsive-fontsize";

export const  Container = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.LIGTH.Back};
align-items: center;
justify-content: center;
height: 100%;
justify-content: space-between;
`
export const InputContainer = styled.View`
flex: 1;
flex-direction: row;
align-items: center;
justify-content: center;
width: ${({ theme }) => theme.SIZE.window - 20}px;
max-height: ${RFPercentage(8)}px;
min-height: ${RFPercentage(8)}px;
margin-top: ${({ theme }) => theme.SIZE.statusbar}px;
`
export const Input = styled.TextInput`
width: ${({ theme }) => theme.SIZE.window - 100}px;
max-height: ${RFPercentage(5)}px;
border: 1px solid red;
border-radius: 10px;
padding-left: ${RFPercentage(4)}px;;
`
export const IconLupa = styled.Image`
width: ${RFPercentage(2.5)}px;
height: ${RFPercentage(2.5)}px;
margin-left: ${RFPercentage(2)}px;
position: absolute;
left: ${RFPercentage(4)}px;
`
export const FilterContainer = styled.TouchableOpacity`
flex: 1;
flex-direction: row;
align-items: center;
justify-content: center;
width: ${({ theme }) => theme.SIZE.window - 30}px;
max-height: ${RFPercentage(5)}px;
border: 1px solid black;
border-radius: 10px;
margin-bottom: ${RFPercentage(8)}px;
` 
export const Text = styled.Text`
color: ${({theme}) => theme.LIGTH.IconText};
font-size: ${RFPercentage(1)}px;
font-family: ${({theme}) => theme.FONTS.Bold};
`
export const IconFilter = styled.Image`
width: ${RFPercentage(3)}px;
height: ${RFPercentage(3)}px;
margin-left: ${RFPercentage(2)}px;
`