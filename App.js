import React from "react";
import { StatusBar, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import IntroScreen from "./Screens/IntroScreen";
import Router from "./Screens/HomeRouter/router";
import LoginScreen from "./Screens/LoginScreen";

const StackNavigator = createStackNavigator(
  {
    IntroScreen: IntroScreen,
    LoginScreen: LoginScreen,
    Router: Router
  },
  {
    initialRouteName: "Router",
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