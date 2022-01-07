import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  Alert
} from 'react-native'
import { DATA } from '../data'
import { THEME } from '../theme'

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId')

  const post = DATA.find(post => post.id === postId)

  const handleRemove = () => {
    Alert.alert('Remove', 'Remove post', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      { text: 'OK', style: 'destructive', onPress: () => console.log('OK Pressed') }
    ])
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: post.img }} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title={'Remove'}
        color={THEME.DANGER_COLOR}
        onPress={handleRemove}
      />
    </ScrollView>
  )
}

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam('date')
  return { title: `Post ${new Date(date).toLocaleDateString()}` }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  textWrapper: {
    padding: 10
  },
  title: {
    fontFamily: 'roboto'
  }
})
