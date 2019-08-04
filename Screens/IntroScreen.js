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
import Icon from "react-native-vector-icons/FontAwesome5";

//svg
import Path from "./Assets/path";

export default class LoginScreen extends Component {
  Navi1 = () => {
    this.props.navigation.navigate("LoginScreen");
  };

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={["#00ff92", "#00c4ff"]}
          style={styles.lg}
        >
          <KeyboardAvoidingView style={styles.container}>
            <StatusBar
              translucent={true}
              barStyle="dark-content"
              backgroundColor="transparent"
            />

            <View
              style={{
                flex: 1,
                marginTop: "50%"
              }}
            >
              <Image
                source={require("./Assets/logo2.png")}
                style={{
                  shadowOffset: { width: 10, height: 10 },
                  shadowColor: "black",
                  shadowOpacity: 1,
                  elevation: 3
                }}
              />
            </View>
            <View style={{ flex: 0.8 }}>
              <Text style={styles.or}>Find Your Nearest Doctor</Text>
            </View>
            <View style={{ alignItems: "flex-end", flex: 1 }}>
              <View style={{ alignItems: "flex-end" }}>
                <TouchableOpacity onPress={this.Navi1}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#ffffff", "#ffffff"]}
                    style={styles.btn2}
                  >
                    <Text style={styles.text2}>MAKE STEP</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContentL: "center",
                marginTop: 25,
                marginBottom: 5,

                flex: 0.3
              }}
            >
              <Icon
                style={{ color: "#fff", padding: 3 }}
                solid
                name="circle"
                size={8}
              />
              <Icon
                style={{ color: "#fff", padding: 3 }}
                solid
                name="circle"
                size={8}
              />
              <Icon
                style={{ color: "#fff", padding: 3 }}
                solid
                name="circle"
                size={8}
              />
            </View>
          </KeyboardAvoidingView>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center"
  },
  lg: {
    flex: 1,
    width: "100%"
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
    elevation: 3,
    marginTop: 100
  },

  text2: {
    textAlign: "center",

    color: "#707070",
    fontFamily: "Segoe UI",
    fontSize: 18,
    fontWeight: "600"
  },
  or: {
    letterSpacing: 1.13,
    color: "#ffffff",
    fontFamily: "Segoe UI",
    fontSize: 22,
    fontWeight: "600"
  }
});
