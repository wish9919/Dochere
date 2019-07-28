import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

//google-map

export default class MapViewHome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Map Intergration</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
