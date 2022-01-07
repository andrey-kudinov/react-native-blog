import { StyleSheet, Text, View } from "react-native";

export const BookmarkedScreen = () => {
  return <View style={StyleSheet.wrapper}><Text>BookmarkedScreen</Text></View>
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})