import { useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { DATA } from '../data'
import { THEME } from '../theme'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { removePost, toggleBookmarked } from '../store/actions/postAction'

export const PostScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const postId = navigation.getParam('postId')
  const post = useSelector(state =>
    state.blog.posts.find(post => post.id === postId)
  )

  const isBookmarked = useSelector(state =>
    state.blog.bookmarkedPosts.some(post => post.id === postId)
  )

  useEffect(() => {
    console.log('isBookmarked -', isBookmarked)
    navigation.setParams({ isBookmarked })
  }, [isBookmarked])

  const handleToggleBookmarked = useCallback(() => {
    dispatch(toggleBookmarked(postId))
  }, [dispatch, postId])

  useEffect(() => {
    navigation.setParams({ handleToggleBookmarked })
  }, [handleToggleBookmarked])

  const handleRemove = () => {
    Alert.alert(
      'Remove',
      'Remove post',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'OK',
          style: 'destructive',
          onPress: () => {
            console.log(2)
          }
        }
      ],
      { cancelable: false }
    )
  }

  const handleRemoveImmediately = () => {
    navigation.navigate('Blog')
    dispatch(removePost(postId))
  }

  if (!post) {
    return null
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
        onPress={handleRemoveImmediately}
      />
    </View>
  )
}

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam('date'),
    isBookmarked = navigation.getParam('isBookmarked'),
    iconName = isBookmarked ? 'ios-star' : 'ios-star-outline',
    handleToggleBookmarked = navigation.getParam('handleToggleBookmarked')

  return {
    title: `Post ${new Date(date).toLocaleDateString()}`,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title='Take photo'
          iconName={iconName}
          onPress={handleToggleBookmarked}
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
