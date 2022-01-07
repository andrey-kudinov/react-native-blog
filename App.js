import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { AppLoading } from 'expo'
import { fonts } from './src/fonts'

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (isReady) {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setIsReady(true)}
        onError={error => console.log(error)}
      />
    )
  }

  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  )
}
