import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";

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
  Button as Btn
} from "native-base";

import Icon from "react-native-vector-icons/FontAwesome5";
import { Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class CareScreen extends Component {
  listItem = [
    {
      name: "Settings",

      ico: "cog"
    },
    {
      name: "Files",

      ico: "folder"
    },
    {
      name: "Help & Support",

      ico: "question-circle"
    },
    {
      name: "Logout",

      ico: "sign-out-alt"
    }
  ];
  render() {
    return (
      <View style={styles.container}>
        <Header
          style={{ backgroundColor: "#fff", marginTop: 25 }}
          iosBarStyle="dark-content"
          androidStatusBarColor="#fff"
        >
          <Body>
            <Title
              style={{ color: "#2A2E43", fontWeight: "500", marginLeft: 20 }}
            >
              My Account
            </Title>
          </Body>
        </Header>
        <ScrollView style={styles.body}>
          <View>
            <CardItem>
              <Left>
                <View style={{ width: "35%", alignItems: "center" }}>
                  <TouchableOpacity>
                    <Icon
                      style={{ color: "#00c4ff" }}
                      solid
                      name="user-circle"
                      size={110}
                    />
                  </TouchableOpacity>
                </View>
                <Body>
                  <Text
                    style={{
                      textShadowColor: "rgba(0, 0, 0, 0.16)",
                      textShadowOffset: { width: 3, height: 0 },
                      textShadowRadius: 6,
                      color: "#2a2e43",
                      fontFamily: "Gibson",
                      fontSize: 24,
                      fontWeight: "600"
                    }}
                  >
                    Sasith Warnaka
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: "#4a19e7",

                        fontWeight: "400",
                        textShadowColor: "rgba(0, 0, 0, 0.16)",
                        textShadowOffset: { width: 3, height: 0 },
                        textShadowRadius: 6,

                        fontFamily: "Gibson",
                        fontSize: 14,
                        fontWeight: "400"
                      }}
                    >
                      Edit Profile
                    </Text>
                  </TouchableOpacity>
                </Body>
              </Left>
            </CardItem>
          </View>
          <FlatList
            data={this.listItem}
            renderItem={this.renderList}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>
    );
  }
  renderList = ({ item }) => (
    <TouchableOpacity>
      <View>
        <ListItem>
          <Left>
            <View style={{ flex: 0.1, alignItems: "center" }}>
              <Icon
                style={{ color: "#00c4ff" }}
                solid
                name={item.ico}
                size={25}
              />
            </View>
            <Body>
              <Text
                style={{
                  color: "#484747",
                  fontFamily: "Segoe UI",
                  fontSize: 20,
                  fontWeight: "600",
                  textShadowColor: "rgba(0, 0, 0, 0.16)",
                  textShadowOffset: { width: 1, height: 0 },
                  textShadowRadius: 4
                }}
              >
                {item.name}
              </Text>
            </Body>
          </Left>
        </ListItem>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  body: {
    flex: 1
  }
});
