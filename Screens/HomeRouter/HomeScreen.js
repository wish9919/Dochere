import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";

import { Header, Body, Left, Right, Title } from "native-base";

//screens
import MapViewHome from "./MapViewHome";
import ListViewHome from "./ListViewHome";

const TabNavigator = createMaterialTopTabNavigator(
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

const AppContainer = createAppContainer(TabNavigator);

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          style={{ backgroundColor: "#fff" }}
          iosBarStyle="dark-content"
          androidStatusBarColor="#fff"
        >
          <Body>
            <Title
              style={{ color: "#2A2E43", fontWeight: "500", marginLeft: 20 }}
            >
              Talk to Clinicians
            </Title>
          </Body>
        </Header>
        <AppContainer />
      </View>
    );
  }
}
