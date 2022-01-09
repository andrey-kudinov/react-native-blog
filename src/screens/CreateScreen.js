import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  ScrollView,
  // TouchableWithoutFeedback,
  // Keyboard
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { addPost } from '../store/actions/postAction'
import { THEME } from '../theme'

export const CreateScreen = ({navigation}) => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleCreate = () => {
    const post = {
      date: new Date().toJSON(),
      text,
      img: 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg',
      bookmarked: false
    }
    dispatch(addPost(post))
    navigation.navigate('Blog')
  }

  return (
    <ScrollView>
      {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> */}
        <View style={styles.wrapper}>
          <Text style={styles.title}>CreateScreen</Text>
          <TextInput
            style={styles.textarea}
            placeholder='Type here...'
            value={text}
            onChangeText={setText}
            multiline
            numberOfLines={4}
          />

          {/* <Image /> */}

          <Button
            title='Create Post'
            color={THEME.MAIN_COLOR}
            onPress={handleCreate}
          />
        </View>
      {/* </TouchableWithoutFeedback> */}
    </ScrollView>
  )
}

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Menu'
        iconName='ios-menu'
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
})

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  title: {
    paddingVertical: 10,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'roboto'
  },
  textarea: {
    padding: 10,
    marginBottom: 10
  }
})
