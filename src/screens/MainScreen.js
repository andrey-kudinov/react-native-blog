import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import { Post } from '../components/Post'
import { DATA } from '../data'

export const MainScreen = ({ navigation }) => {
  const toPost = () => {
    navigation.navigate('Post')
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id}
        renderItem={({ item }) => <Post post={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
})
