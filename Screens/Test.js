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
  Container,
  Accordion,
  listItem as listItem2
} from "native-base";

import Icon from "react-native-vector-icons/FontAwesome5";

export default class CareScreen extends Component {
  listItem = [
    {
      title: "About",
      ico: "user",
      a1: "Name",
      a2:
        "Sasith Warnakalkjxfdtghlijdrhtyglijuhtdrgiujdrhtiudrhgiutrghgiutrhgk",
      b1: "birthday",
      b2: "15/07/1996",
      c1: "sex",
      c2: "male",
      d1: "+Add Ethnicity",
      d2: "Add Language"
    },
    {
      title: "Contact",
      ico: "address-book"
    },
    {
      title: "Health Metrics",
      ico: "heartbeat"
    }
  ];
  listItem2 = [
    {
      title: "About",
      ico: "user",
      a1: "Name",
      a2: "Sasith Warnaka",
      b1: "birthday",
      b2: "15/07/1996",
      c1: "sex",
      c2: "male",
      d1: "+Add Ethnicity",
      d2: "Add Language"
    },
    {
      title: "Contact",
      ico: "address-book"
    },
    {
      title: "Health Metrics",
      ico: "heartbeat"
    }
  ];

  render() {
    return (
      <View style={styles.container}>
        <Header
          style={{ backgroundColor: "#fff" }}
          iosBarStyle="dark-content"
          androidStatusBarColor="#fff"
        >
          <Body>
            <Title
              style={{ color: "#2A2E43", fontWeight: "500", marginLeft: 20 }}
            >
              My Records
            </Title>
          </Body>
        </Header>
        <ScrollView style={styles.body}>
          <View>
            <CardItem>
              <Left>
                <View style={{ width: "35%", alignItems: "center" }}>
                  <Icon
                    style={{ color: "#00c4ff" }}
                    solid
                    name="user-circle"
                    size={110}
                  />
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
                </Body>
              </Left>
            </CardItem>
          </View>

          <FlatList
            data={this.listItem}
            renderItem={this.renderList}
            keyExtractor={(item, index) => index.toString()}
          />
          <FlatList
            data={this.listItem2}
            renderItem={this.renderList}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>
    );
  }
  renderList = ({ item }) => (
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
              {item.title}
            </Text>
            {/* details */}
            <View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      textShadowColor: "rgba(0, 0, 0, 0.16)",
                      textShadowOffset: { width: 1, height: 0 },
                      textShadowRadius: 4,
                      color: "#818080",
                      fontFamily: "Helvetica",
                      fontSize: 17,
                      fontWeight: "400"
                    }}
                  >
                    {item.a1}
                  </Text>
                </View>
                <View style={{ flex: 2 }}>
                  <Text
                    style={{
                      color: "#2a2e43",
                      fontFamily: "Font Awesome 5 Free",
                      fontSize: 17,
                      fontWeight: "400",
                      textShadowColor: "rgba(0, 0, 0, 0.16)",
                      textShadowOffset: { width: 1, height: 0 },
                      textShadowRadius: 4
                    }}
                  >
                    {item.a2}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      textShadowColor: "rgba(0, 0, 0, 0.16)",
                      textShadowOffset: { width: 1, height: 0 },
                      textShadowRadius: 4,
                      color: "#818080",
                      fontFamily: "Helvetica",
                      fontSize: 17,
                      fontWeight: "400"
                    }}
                  >
                    {item.b1}
                  </Text>
                </View>
                <View style={{ flex: 2 }}>
                  <Text
                    style={{
                      color: "#2a2e43",
                      fontFamily: "Font Awesome 5 Free",
                      fontSize: 17,
                      fontWeight: "400",
                      textShadowColor: "rgba(0, 0, 0, 0.16)",
                      textShadowOffset: { width: 1, height: 0 },
                      textShadowRadius: 4
                    }}
                  >
                    {item.b2}
                  </Text>
                </View>
              </View>
            </View>
          </Body>
        </Left>
      </ListItem>
    </View>
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
