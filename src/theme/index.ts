import { Dimensions, StatusBar } from 'react-native';

const statusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default {
  LIGTH: {
    Back: '#DBD7D7',
    Footer: '#FFFAFA',
    Cards: '#FAF5F5',
    IconText: '#000000',
  },
  DARCK: {},
  FONTS: {
    Light: 'Roboto_300Light',
    Regular: 'Roboto_400Regular',
    Medium: 'Roboto_500Medium',
    Bold: 'Roboto_700Bold'
  },
  SIZE:{
    window: Dimensions.get('window').width,
    statusbar : statusBarHeigth,
  }
}
