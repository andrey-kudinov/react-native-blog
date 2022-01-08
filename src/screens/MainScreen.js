import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { DATA } from '../data'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'

export const MainScreen = ({ navigation }) => {
  const handleOpenPost = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      bookmarked: post.bookmarked
    })
  }

  return <PostList data={DATA} onOpen={handleOpenPost} />
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
