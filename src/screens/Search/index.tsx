import { View, Text } from 'react-native'
import React, { useState } from 'react'
import OptionsScreens from '../../components/OptionsScreens'
import { Container, FilterContainer, IconFilter, IconLupa, Input, InputContainer } from './styled'
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation() as {navigate: (para: string, { }) => void};

  const heardleSearch = () => {
    navigation.navigate('screenList', { search })
  }

  return (
    <Container>
      <InputContainer>
        <IconLupa source={require('../../assets/lupa.png')} />
        <Input
        placeholder='Enter the make or model'
        onChangeText={(text) => setSearch(text)}
        onSubmitEditing={heardleSearch}
        />
      </InputContainer>
      <FilterContainer>
        <Text>Filter</Text>
        <IconFilter source={require('../../assets/filtro.png')} />
      </FilterContainer>
      <OptionsScreens />
    </Container>
  )
}

export default Search
