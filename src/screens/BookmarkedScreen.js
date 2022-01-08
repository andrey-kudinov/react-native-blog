import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { DATA } from '../data'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'

export const BookmarkedScreen = ({ navigation }) => {
  const data = DATA.filter(post => post.bookmarked)

  const handleOpenPost = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      bookmarked: post.bookmarked
    })
  }

  return <PostList data={data} onOpen={handleOpenPost} />
}

BookmarkedScreen.navigationOptions = {
  title: 'Bookmarked',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Take photo'
        iconName='ios-menu'
        onPress={() => console.log('menu')}
      />
    </HeaderButtons>
  )
}
