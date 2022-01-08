import { useState } from 'react'
import AppLoading from 'expo-app-loading'
import { AppNavigation } from './src/navigations/AppNavigation'
import { Provider } from 'react-redux'
import { fonts } from './src/fonts'
import store from './src/store'

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setIsReady(true)}
        onError={error => console.log(error)}
      />
    )
  }

  return <Provider store={store}><AppNavigation /></Provider>
}
