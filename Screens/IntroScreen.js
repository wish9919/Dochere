import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

//svg
import Path from "./Assets/path";

export default class IntroScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          barStyle="dark-content"
          backgroundColor="transparent"
        />
        <View style={{ flex: 1, position: "absolute" }}>
          <Path />
        </View>

        <View style={styles.flex1}>
          <Text>Hello</Text>
        </View>
        <View style={styles.flex2}>
          <Text>Hello2</Text>
        </View>
        <View style={styles.flex3}>
          <Text>Hello2</Text>
        </View>
        <View style={styles.flex4}>
          <Text>Hello2</Text>
        </View>
        <View style={styles.flex5}>
          <Text>Hello2</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#f73e35"
  },
  flex1: {
    flex: 1,
    backgroundColor: "#446378",
    justifyContent: "center",
    alignItems: "center"
  },
  flex2: {
    flex: 1,
    backgroundColor: "#ab5796"
  },
  flex3: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center"
  },
  flex4: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  flex5: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center"
  }
});
