import * as Font from 'expo-font'
import { DB } from './db'

export const fonts = async () => {
  try {
    await Font.loadAsync({
      roboto: require('../assets/fonts/Roboto-Regular.ttf'),
      'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf')
    })

    await DB.init()
    console.log('Database starting...')
  } catch (error) {
    console.log('Error -', error)
  }
}
