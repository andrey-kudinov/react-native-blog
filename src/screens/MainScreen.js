import { StyleSheet, Text, View, Button } from 'react-native'

export const MainScreen = ({ navigation }) => {
  const toPost = () => {
    navigation.navigate('Post')
  }

  return (
    <View style={styles.wrapper}>
      <Text>MainScreen</Text>
      <Button title='to Post' onPress={toPost} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
