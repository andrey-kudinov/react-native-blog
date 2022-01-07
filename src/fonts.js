import * as Font from 'expo-font'

export async function fonts() {
  await Font.loadAsync({
    'roboto': require('../assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf')
  })
}