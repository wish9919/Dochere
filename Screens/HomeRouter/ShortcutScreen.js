import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TextInput,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import { SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  Header,
  Body,
  Title,
  Card,
  CardItem,
  Left,
  Thumbnail,
  List,
  ListItem,
  Content,
  Container,
  Item,
  Input,
  Button,
  Badge
} from "native-base";
import LinearGradient from "react-native-linear-gradient";

export default class CareScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <StatusBar
            translucent={true}
            barStyle="dark-content"
            backgroundColor="transparent"
          />

          <ScrollView style={styles.body}>
            <View>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#00c4ff", "#00ff92"]}
                style={{ flex: 1 }}
              >
                <View>
                  <View
                    style={{
                      height: 40,
                      marginTop: 30,
                      flexDirection: "row"
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        backgroundColor: "#FFF",
                        marginHorizontal: 20,
                        shadowOffset: { width: 0, height: 0 },
                        shadowColor: "black",
                        shadowOpacity: "1",
                        elevation: 2,
                        borderRadius: 50,
                        flex: 5
                      }}
                    >
                      <Icon
                        name="compass"
                        size={15}
                        color="blue"
                        style={{
                          marginLeft: 15,
                          marginRight: 15,
                          marginTop: 12
                        }}
                      />
                      <TextInput
                        placeholder="Colombo, Sri lanka"
                        placeholderTextColor="grey"
                        style={{
                          backgroundColor: "#fff",
                          flex: 1,
                          fontWeight: "700",
                          color: "#8a8888",
                          fontFamily: "Helvetica",
                          fontSize: 12,
                          fontWeight: "400"
                        }}
                      />
                      <Icon
                        name="pencil-alt"
                        size={15}
                        color="grey"
                        style={{
                          marginLeft: 15,
                          marginRight: 15,
                          marginTop: 12
                        }}
                      />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Icon name="bell" size={40} color="#fff" />
                    </View>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      marginTop: 20
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        alignItems: "flex-start",
                        marginLeft: 20
                      }}
                    >
                      <View>
                        <Text style={styles.hi}> Hi Sasith,</Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          marginBottom: 5
                        }}
                      >
                        <View style={{}}>
                          <Text style={styles.txt1}> You Have</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 5 }}>
                          <Badge style={{ height: 20 }} primary>
                            <Text style={styles.txt1}> 0 Tasks</Text>
                          </Badge>
                        </View>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          marginBottom: 5
                        }}
                      >
                        <View style={{}}>
                          <Text style={styles.txt1}> and</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 5 }}>
                          <Badge style={{ height: 20 }} primary>
                            <Text style={styles.txt1}> 0 Appointmants</Text>
                          </Badge>
                        </View>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          paddingBottom: 30
                        }}
                      >
                        <View style={{}}>
                          <Text style={styles.txt1}> Comming Up Today </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        alignItems: "flex-end",
                        marginRight: 20
                      }}
                    >
                      <Icon name="user-circle" size={80} color="#fff" />
                    </View>
                  </View>
                </View>
              </LinearGradient>
              <View style={{ height: 500 }}>
                <View>
                  <Text
                    style={{
                      color: "#ababab",
                      fontFamily: "Gibson",
                      fontSize: 20,
                      fontWeight: "400",
                      marginTop: 30,
                      marginLeft: 10
                    }}
                  >
                    Shortcuts
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        flex: 1,
                        alignItems: "flex-end",
                        marginRight: 10
                      }}
                    >
                      <Button style={styles.btn1}>
                        <Text style={styles.text1}>Assess my Symptoms</Text>
                      </Button>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        alignItems: "flex-start",
                        marginLeft: 10
                      }}
                    >
                      <Button style={styles.btn1}>
                        <Text style={styles.text1}>Talk to a Doctor</Text>
                      </Button>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        flex: 1,
                        alignItems: "flex-end",
                        marginRight: 10
                      }}
                    >
                      <Button style={styles.btn1}>
                        <Text style={styles.text1}>Post a health Question</Text>
                      </Button>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        alignItems: "flex-start",
                        marginLeft: 10
                      }}
                    >
                      <Button style={styles.btn1}>
                        <Text style={styles.text1}>Post & News</Text>
                      </Button>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                position: "absolute"
              }}
            >
              <View
                style={{
                  height: 40,
                  marginTop: 200,
                  flexDirection: "row",
                  position: "relative",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#FFF",
                    marginHorizontal: 20,
                    shadowOffset: { width: 0, height: 0 },
                    shadowColor: "black",
                    shadowOpacity: "1",
                    elevation: 2,
                    borderRadius: 50
                  }}
                >
                  <Icon
                    name="search"
                    size={15}
                    color="blue"
                    style={{
                      marginLeft: 15,
                      marginRight: 15,
                      marginTop: 12
                    }}
                  />
                  <TextInput
                    placeholder="Search answers, articles and more"
                    placeholderTextColor="grey"
                    style={{
                      backgroundColor: "#fff",
                      flex: 1,
                      fontWeight: "700",
                      color: "#8a8888",
                      fontFamily: "Helvetica",
                      fontSize: 12,
                      fontWeight: "400",
                      height: 40,
                      width: 100,
                      position: "relative"
                    }}
                  />
                  <Icon
                    name="times"
                    size={15}
                    color="grey"
                    style={{
                      marginLeft: 15,
                      marginRight: 15,
                      marginTop: 12
                    }}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  body: {
    flex: 1
  },
  searchbar: {
    color: "#fff",
    borderRadius: 15
  },
  hi: {
    textShadowColor: "rgba(0, 0, 0, 0.16)",
    textShadowOffset: { width: 3, height: 0 },
    textShadowRadius: 6,
    color: "#ffffff",
    fontFamily: "Gibson",
    fontSize: 24,
    fontWeight: "600"
  },
  txt1: {
    color: "#ffffff",
    fontFamily: "Helvetica",
    fontSize: 13,
    fontWeight: "400"
  },
  text1: {
    textAlign: "center",
    color: "#434343",
    fontFamily: "Helvetica",
    fontSize: 19,
    fontWeight: "400",
    alignItems: "baseline"
  },

  btn1: {
    width: 150,
    height: 140,
    justifyContent: "center",
    backgroundColor: "#f0f1f2",
    shadowOpacity: 1,
    elevation: 3,
    marginTop: 20,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: { width: 3, height: 0 },
    shadowRadius: 6,
    borderRadius: 35
  },
  to: {}
});
