import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'

export const BookmarkedScreen = ({ navigation }) => {
  const bookmarkedPosts = useSelector(state => state.blog.bookmarkedPosts)

  const handleOpenPost = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      bookmarked: post.bookmarked
    })
  }

  return <PostList data={bookmarkedPosts} onOpen={handleOpenPost} />
}

BookmarkedScreen.navigationOptions = ({navigation}) => ({
  title: 'Bookmarked',
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
