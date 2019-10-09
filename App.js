import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>To get started, edit index.ios.js</Text>
      <Text style={styles.instructions}>
        Press Cmd+R to reload,{"\n"}
        Cmd+D or shake for dev menu
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d7ecf5",
    alignItems: "center",
    justifyContent: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

AppRegistry.registerComponent("FirstProject", () => App);
