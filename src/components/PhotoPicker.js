import { useState } from 'react'
import { StyleSheet, Button, Image, View, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export const PhotoPicker = ({ onPick }) => {
  const [image, setImage] = useState(null)

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [16, 9],
      quality: 1
    })

    if (!result.cancelled) {
      setImage(result.uri)
      onPick(result.uri)
    }
  }

  return (
    <View style={styles.wrapper}>
      <Button title='Take a photo' onPress={handlePickImage} />
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 30
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10
  }
})
