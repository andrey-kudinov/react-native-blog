import { StyleSheet, Text, View } from "react-native";

export const MainScreen = () => {
  return <View style={StyleSheet.wrapper}><Text>MainScreen</Text></View>
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})