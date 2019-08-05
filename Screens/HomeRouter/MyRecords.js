//! meke bn renderItems wena wenama ghuwe na habai flatlist 3ka ghuwa. mkda uba name ehma label tika JSON eke ghla thibba nisa danata ohma tyla awlk unoth ghamu wenama...
//TODO mchn mathk krla uba styles ghaddi external ghpan aa nattam ubtama epa wei..

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
  Accordion
} from "native-base";

import Icon from "react-native-vector-icons/FontAwesome5";

export default class CareScreen extends Component {
  about = [
    {
      title: "About",
      ico: "user",
      a1: "Name",
      a2: "Sasith Warnaka",
      b1: "birthday",
      b2: "15/07/1996",
      c1: "Biological Sex",
      c2: "Male",
      d1: "Ethnicity",
      d2: "+Add Ethnicity",
      e1: "Add Language",
      e2: "+Add Language"
    }
  ];

  contact = [
    {
      title: "Contact",
      ico: "address-book",
      a1: "Mobile",
      a2: "+9477 123 1234",
      b1: "Land",
      b2: "+9481 256 2567",
      c1: "Address",
      c2: "F8, Kandy Rd, Doluwa, Gampola",
      d1: "Empty",
      d2: "Empty",
      e1: "Empty",
      e2: "Empty"
    }
  ];

  health = [
    {
      title: "Health Metrics",
      ico: "heartbeat",
      a1: "Name",
      a2: "Sasith Warnaka",
      b1: "birthday",
      b2: "15/07/1996",
      c1: "Biological Sex",
      c2: "Male",
      d1: "Ethnicity",
      d2: "+Add Ethnicity",
      e1: "Add Language",
      e2: "+Add Language"
    }
  ];

  render() {
    return (
      <View style={styles.container}>
        <Header
          style={{ backgroundColor: "#fff", marginTop: 30 }}
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
                <View style={styles.cardItemLeft}>
                  <Icon
                    style={{ color: "#00c4ff" }}
                    solid
                    name="user-circle"
                    size={110}
                  />
                </View>
                <Body>
                  <Text style={styles.cardItemBodyText}>Sasith Warnaka</Text>
                  <Text style={styles.editProfileText}>
                    22 Years | 15/07/1999
                  </Text>
                </Body>
              </Left>
            </CardItem>
          </View>

          <FlatList
            data={this.about}
            renderItem={this.renderList}
            keyExtractor={(item, index) => index.toString()}
          />

          <FlatList
            data={this.contact}
            renderItem={this.renderList}
            keyExtractor={(item, index) => index.toString()}
          />

          <FlatList
            data={this.health}
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
            <Text style={styles.renderItemTitile}>{item.title}</Text>
            {/* 
             details */}
            <View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1.3 }}>
                  <Text style={styles.renderItemLabel}>{item.a1}</Text>
                </View>
                <View style={{ flex: 2 }}>
                  <Text style={styles.renderItemValue}>{item.a2}</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1.3 }}>
                  <Text style={styles.renderItemLabel}>{item.b1}</Text>
                </View>
                <View style={{ flex: 2 }}>
                  <Text style={styles.renderItemValue}>{item.b2}</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1.3 }}>
                  <Text style={styles.renderItemLabel}>{item.c1}</Text>
                </View>
                <View style={{ flex: 2 }}>
                  <Text style={styles.renderItemValue}>{item.c2}</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1.3 }}>
                  <Text style={styles.renderItemLabel}>{item.d1}</Text>
                </View>
                <View style={{ flex: 2 }}>
                  <Text style={styles.renderItemValue}>{item.d2}</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1.3 }}>
                  <Text style={styles.renderItemLabel}>{item.e1}</Text>
                </View>
                <View style={{ flex: 2 }}>
                  <Text style={styles.renderItemValue}>{item.e2}</Text>
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
  },
  cardItemLeft: { width: "35%", alignItems: "center" },
  cardItemBodyText: {
    textShadowColor: "rgba(0, 0, 0, 0.16)",
    textShadowOffset: { width: 3, height: 0 },
    textShadowRadius: 6,
    color: "#2a2e43",
    fontFamily: "Gibson",
    fontSize: 24,
    fontWeight: "600"
  },
  editProfileText: {
    color: "#2A2E43",
    fontWeight: "400",
    textShadowColor: "rgba(0, 0, 0, 0.16)",
    textShadowOffset: { width: 3, height: 0 },
    textShadowRadius: 6,
    fontFamily: "Gibson",
    fontSize: 14,
    fontWeight: "400"
  },
  renderItemTitile: {
    color: "#484747",
    fontFamily: "Segoe UI",
    fontSize: 20,
    fontWeight: "600",
    textShadowColor: "rgba(0, 0, 0, 0.16)",
    textShadowOffset: { width: 1, height: 0 },
    textShadowRadius: 4
  },
  renderItemLabel: {
    textShadowColor: "rgba(0, 0, 0, 0.16)",
    textShadowOffset: { width: 1, height: 0 },
    textShadowRadius: 4,
    color: "#818080",
    fontFamily: "Helvetica",
    fontSize: 17,
    fontWeight: "400"
  },
  renderItemValue: {
    color: "#2a2e43",
    fontFamily: "Font Awesome 5 Free",
    fontSize: 17,
    fontWeight: "400",
    textShadowColor: "rgba(0, 0, 0, 0.16)",
    textShadowOffset: { width: 1, height: 0 },
    textShadowRadius: 4
  }
});
