import { StyleSheet, Text, View } from "react-native";

export const CreateScreen = () => {
  return <View style={styles.wrapper}><Text>CreateScreen</Text></View>
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})