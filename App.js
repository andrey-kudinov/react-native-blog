import { useState } from 'react'
import AppLoading from 'expo-app-loading'
import { AppNavigation } from './src/navigations/AppNavigation'
import { fonts } from './src/fonts'

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

  return <AppNavigation />
}
