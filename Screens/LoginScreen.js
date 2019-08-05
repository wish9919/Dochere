import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { Container, Header, Content, Item, Input } from "native-base";
import LinearGradient from "react-native-linear-gradient";

//svg
import Path from "./Assets/path";

export default class LoginScreen extends Component {
  Navi1 = () => {
    this.props.navigation.navigate("Router");
  };
  Navi2 = () => {
    this.props.navigation.navigate("IntroScreen");
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <StatusBar
          translucent={true}
          barStyle="dark-content"
          backgroundColor="transparent"
        />
        {/* <View style={{ flex: 1, position: "absolute" }}>
          <Path />
        </View> */}

        <Image
          source={require("./Assets/logo1.png")}
          style={{
            shadowOffset: { width: 10, height: 10 },
            shadowColor: "black",
            shadowOpacity: 1,
            elevation: 3,
            bottom: 20
          }}
        />

        <Item style={{ marginVertical: 10 }} rounded>
          <Input
            textContentType="emailAddress"
            style={{ margin: 5, marginHorizontal: 15 }}
            placeholder="Email"
          />
        </Item>

        <Item style={{ marginVertical: 10 }} rounded>
          <Input
            secureTextEntry={true}
            style={{ margin: 5, marginHorizontal: 15 }}
            placeholder="Password"
          />
        </Item>

        <TouchableOpacity onPress={this.Navi1}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#00ff92", "#00c4ff"]}
            style={styles.btn1}
          >
            <Text style={styles.text1}>LOGIN</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View>
          <Text style={styles.or}>OR</Text>
        </View>
        <TouchableOpacity onPress={this.Navi2}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#ffffff", "#ffffff"]}
            style={styles.btn2}
          >
            <Text style={styles.text2}>SIGN UP</Text>
          </LinearGradient>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },

  btn1: {
    borderRadius: 60,
    width: 183.23,
    height: 51.07,
    justifyContent: "center",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 3,
    marginTop: 20
  },
  btn2: {
    borderRadius: 60,
    width: 183.23,
    height: 51.07,
    justifyContent: "center",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 3
  },
  text1: {
    textAlign: "center",
    color: "#ffffff",
    fontFamily: "Segoe UI",
    fontSize: 18,
    fontWeight: "600"
  },
  text2: {
    textAlign: "center",
    color: "#00c4ff",
    fontFamily: "Segoe UI",
    fontSize: 18,
    fontWeight: "600"
  },
  or: {
    color: "#7e7e7e",
    fontFamily: "Segoe UI",
    fontSize: 18,
    fontWeight: "400",
    letterSpacing: 1.13,
    margin: 20
  }
});
