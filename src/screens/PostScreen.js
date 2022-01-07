import { StyleSheet, Text, View } from "react-native";

export const PostScreen = () => {
  return <View style={StyleSheet.wrapper}><Text>PostScreen</Text></View>
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})