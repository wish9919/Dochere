import React from "react";
import { StatusBar, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import IntroScreen from "./Screens/IntroScreen";
import Router from "./Screens/HomeRouter/router";
import LoginScreen from "./Screens/LoginScreen";
import ListViewHome from "./Screens/HomeRouter/ListViewHome";
import MyRecords from "./Screens/HomeRouter/MyRecords";
import ShortcutScreen from "./Screens/HomeRouter/ShortcutScreen";

const StackNavigator = createStackNavigator(
  {
    IntroScreen: IntroScreen,
    LoginScreen: LoginScreen,
    Router: Router,
    ListViewHome: ListViewHome,
    MyRecords: MyRecords,
    ShortcutScreen: ShortcutScreen
  },
  {
    initialRouteName: "ShortcutScreen",
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(StackNavigator);

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <AppContainer />
    </View>
  );
};

export default App;
