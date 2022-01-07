import * as Font from 'expo-font'

export const fonts = async () => {
  await Font.loadAsync({
    'roboto': require('../assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf')
  })
}
