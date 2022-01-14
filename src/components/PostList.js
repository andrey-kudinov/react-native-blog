import { View, StyleSheet, FlatList, Text } from 'react-native'
import { Post } from './Post'

export const PostList = ({ data = [], onOpen }) => {
  if (!data.length) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>No items</Text>
      </View>
    )
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={post => post.id}
        renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flex: 1
  },
  text: {
    fontFamily: 'roboto',
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 18,
  }
})
