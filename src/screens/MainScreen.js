import { useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'
import { loadPosts } from '../store/actions/postAction'
import { THEME } from '../theme'

export const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  const posts = useSelector(state => state.blog.posts)
  const loading = useSelector(state => state.blog.loading)

  const handleOpenPost = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      bookmarked: post.bookmarked
    })
  }

  if (loading) {
    return (
      <View style={styles.wrapper}>
        <ActivityIndicator color={THEME.MAIN_COLOR}/>
      </View>
    )
  }

  return <PostList data={posts} onOpen={handleOpenPost} />
}

MainScreen.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Take photo'
        iconName='ios-camera'
        onPress={() => navigation.push('Create Post')}
      />
    </HeaderButtons>
  ),
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
