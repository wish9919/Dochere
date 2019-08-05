import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from "react-native";

import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Warning: ReactNative.createElement"]);

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Icon from "react-native-vector-icons/FontAwesome5";

console.disableYellowBox = true;

//screens
import MyRecords from "./MyRecords";
import HomeScreen from "./HomeScreen";
import CareScreen from "./CareScreen";
import ShortcutScreen from "./ShortcutScreen";
import Account from "./Account";

export default createMaterialBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={23} color={tintColor} />
        )
      }
    },

    CareScreen: {
      screen: CareScreen,
      navigationOptions: {
        tabBarLabel: "Care",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="briefcase-medical" size={23} color={tintColor} />
        )
      }
    },
    // ShortcutScreen: {
    //   screen: ShortcutScreen,
    //   navigationOptions: {
    //     tabBarLabel: "Shortcut",
    //     tabBarIcon: ({ tintColor }) => (
    //       <Icon name="home" size={23} color={tintColor} />
    //     )
    //   }
    // },
    MyRecords: {
      screen: MyRecords,
      navigationOptions: {
        tabBarLabel: "My Records",
        tabBarIcon: ({ tintColor }) => (
          <Icon solid name="clipboard" size={23} color={tintColor} />
        )
      }
    },
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarLabel: "Account",
        tabBarIcon: ({ tintColor }) => (
          <Icon solid name="user" size={23} color={tintColor} />
        )
      }
    }
  },

  {
    initialRouteName: "HomeScreen",
    activeTintColor: "#00C4FF",
    inactiveTintColor: "#2A2E43",
    shifting: true,
    barStyle: {
      backgroundColor: "#fff"
    }
  }
);
