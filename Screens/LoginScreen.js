import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity
} from "react-native";
import { Container, Header, Content, Item, Input } from "native-base";
import LinearGradient from "react-native-linear-gradient";

//svg
import Path from "./Assets/path";

export default class LoginScreen extends Component {
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

        <View style={styles.flex1} />
        <View style={styles.flex2}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              source={require("./Assets/logo1.png")}
              style={{
                shadowOffset: { width: 10, height: 10 },
                shadowColor: "black",
                shadowOpacity: 1,
                elevation: 3,
                marginTop: 20
              }}
            />
          </View>
        </View>
        <View style={styles.flex3} />
        <View style={styles.flex4}>
          <Content
            style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 10 }}
          >
            <Item rounded>
              <Input
                style={{ margin: 2, marginLeft: 15 }}
                placeholder="E mail"
              />
            </Item>
          </Content>

          <Content
            style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 20 }}
          >
            <Item rounded>
              <Input
                style={{ margin: 2, marginLeft: 15 }}
                placeholder="Password"
              />
            </Item>
          </Content>
        </View>
        <View style={styles.flex5} />
        <View style={styles.flex6}>
          <TouchableOpacity>
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
          <TouchableOpacity>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#ffffff", "#ffffff"]}
              style={styles.btn2}
            >
              <Text style={styles.text2}>SIGN UP</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.flex7} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  flex1: {
    flex: 0.75,
    justifyContent: "center",
    alignItems: "center"
  },
  flex2: {
    flex: 1
  },
  flex3: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  flex4: {
    flex: 1,
    justifyContent: "center"
  },
  flex5: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center"
  },
  flex6: {
    flex: 1.3,
    justifyContent: "center",
    alignItems: "center"
  },
  flex7: {
    flex: 0.2,
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
    elevation: 3
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
