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
  ListItem
} from "native-base";

import Icon from "react-native-vector-icons/FontAwesome5";

export default class CareScreen extends Component {
  listItem = [
    {
      name: "Medical Consults",
      description:
        "Review past consults and get advice or treatment from trusted medical clinicians",
      iconName: "calendar",
      ico: "clipboard"
    },
    {
      name: "Health Q&A",
      description:
        "Ask a free, anonymous questions to our clinicians network or review past questions",
      iconName: "quote-right",
      ico: "quote-right"
    },
    {
      name: "Care Guides",
      description:
        "Find a doctor-curated plan to meet your health goals or complete ongoing tasks",
      iconName: "check-square",
      ico: "check-square"
    },
    {
      name: "Search",
      description:
        "Explore answers,  tips, and doctor-curated medical information",
      iconName: "search",
      ico: "search"
    },
    {
      name: "Symptom Assessments",
      description:
        "Check your symptoms with our doctor-trained artificial intelligence",
      iconName: "heartbeat",
      ico: "heartbeat"
    },
    {
      name: "Your Care Team",
      description: "Contact with your healthcare provider ",
      iconName: "heartbeat",
      ico: "stethoscope"
    },
    {
      name: "People You Care For ",
      description:
        "Review past consults and get advice or treatment from trusted medical clinicians",
      iconName: "heartbeat",
      ico: "users"
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
              Care
            </Title>
          </Body>
        </Header>
        <ScrollView style={styles.body}>
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
    <View>
      <List>
        <ListItem>
          <Left>
            <View style={styles.listItemLeft}>
              <Icon
                style={{ color: "#00c4ff" }}
                solid
                name={item.ico}
                size={50}
              />
            </View>
            <Body>
              <Text style={styles.listItemBodyText}>{item.name}</Text>
              <Text style={listItemBodyTextDesc}>{item.description}</Text>
            </Body>
          </Left>
        </ListItem>
      </List>
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
  listItemLeft: { flex: 0.25, alignItems: "center" },
  listItemBodyText: {
    color: "#484747",
    fontFamily: "Segoe UI",
    fontSize: 20,
    fontWeight: "600",
    textShadowColor: "rgba(0, 0, 0, 0.16)",
    textShadowOffset: { width: 1, height: 0 },
    textShadowRadius: 4
  },
  listItemBodyTextDesc: {
    color: "#818080",
    fontFamily: "Segoe UI",
    fontSize: 11,
    fontWeight: "400",
    textShadowColor: "rgba(0, 0, 0, 0.16)",
    textShadowOffset: { width: 1, height: 0 },
    textShadowRadius: 4
  }
});
