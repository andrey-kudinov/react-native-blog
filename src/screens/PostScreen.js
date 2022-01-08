import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { DATA } from '../data'
import { THEME } from '../theme'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId')

  const post = DATA.find(post => post.id === postId)

  const handleRemove = () => {
    Alert.alert('Remove', 'Remove post', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'OK',
        style: 'destructive',
        onPress: () => console.log('OK Pressed')
      }
    ])
  }

  return (
    <View>
      <Image style={styles.image} source={{ uri: post.img }} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title={'Remove'}
        color={THEME.DANGER_COLOR}
        onPress={handleRemove}
      />
    </View>
  )
}

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam('date'),
    bookmarked = navigation.getParam('bookmarked'),
    iconName = bookmarked ? 'ios-star' : 'ios-star-outline'

  return {
    title: `Post ${new Date(date).toLocaleDateString()}`,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title='Take photo'
          iconName={iconName}
          onPress={() => console.log('camera')}
        />
      </HeaderButtons>
    )
  }
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
