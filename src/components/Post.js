import { View, StyleSheet, ImageBackground, Text } from 'react-native'

export const Post = ({ post }) => {
  return (
    <View style={styles.post}>
      <ImageBackground style={styles.image} source={{ uri: post.img }}>
        <View style={styles.titleWrap}>
          <Text style={styles.title}>{new Date(post.date).toLocaleDateString()}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  titleWrap: {
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  title: {
    color: 'white',
    fontFamily: 'roboto'
  }
})
