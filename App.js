import React from "react";

import { createAppContainer, createStackNavigator } from "react-navigation";
import IntroScreen from "./Screens/IntroScreen";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";

const StackNavigator = createStackNavigator(
  {
    IntroScreen: IntroScreen,
    LoginScreen: LoginScreen,
    HomeScreen: HomeScreen
  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(StackNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
