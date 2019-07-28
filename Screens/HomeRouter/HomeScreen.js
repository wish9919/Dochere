import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

import {
  createMaterialTopTabNavigator,
  createSwitchNavigator
} from "react-navigation";

//screens
import MapViewHome from "./MapViewHome";
import ListViewHome from "./ListViewHome";

export class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}

export default createMaterialTopTabNavigator(
  {
    MapViewHome: {
      screen: MapViewHome,
      navigationOptions: {
        tabBarLabel: "Map View"
      }
    },
    ListViewHome: {
      screen: ListViewHome,
      navigationOptions: {
        tabBarLabel: "List View"
      }
    }
  },
  {
    tabBarOptions: {
      tabStyle: {},
      labelStyle: {
        color: "#2A2E43",
        fontWeight: "500"
      },
      style: {
        backgroundColor: "#ffffff"
      },
      indicatorStyle: {
        borderBottomColor: "#00C4FF",
        borderBottomWidth: 3
      }
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
