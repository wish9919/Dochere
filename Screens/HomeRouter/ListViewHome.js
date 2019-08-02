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
  Row
} from "native-base";

import Icon from "react-native-vector-icons/FontAwesome5";

export default class CareScreen extends Component {
  listItem = [
    {
      name: "Dr Hasan Khondeker",
      description: "Internal Medicine",
      rating: "4.8",
      ico: "user-md",
      status: "Available Now",
      statusico: "circle",
      star: "star"
    },
    {
      name: "Dr Hasan Khondeker",
      description: "Internal Medicine",
      rating: "4.8",
      ico: "user-md",
      status: "Available Now",
      statusico: "circle",
      star: "star"
    },
    {
      name: "Dr Hasan Khondeker",
      description: "Internal Medicine",
      rating: "4.8",
      ico: "user-md",
      status: "Available Now",
      statusico: "circle",
      star: "star"
    },
    {
      name: "Dr Hasan Khondeker",
      description: "Internal Medicine",
      rating: "4.8",
      ico: "user-md",
      status: "Available Now",
      statusico: "circle",
      star: "star"
    },
    {
      name: "Dr Hasan Khondeker",
      description: "Internal Medicine",
      rating: "4.8",
      ico: "user-md",
      status: "Available Now",
      statusico: "circle",
      star: "star"
    },
    {
      name: "Dr Hasan Khondeker",
      description: "Internal Medicine",
      rating: "4.8",
      ico: "user-md",
      status: "Available Now",
      statusico: "circle",
      star: "star"
    },
    {
      name: "Dr Hasan Khondeker",
      description: "Internal Medicine",
      rating: "4.8",
      ico: "user-md",
      status: "Available Now",
      statusico: "circle",
      star: "star"
    },
    {
      name: "Dr Hasan Khondeker",
      description: "Internal Medicine",
      rating: "4.8",
      ico: "user-md",
      status: "Available Now",
      statusico: "circle",
      star: "star"
    }
  ];
  render() {
    return (
      <View style={styles.container}>
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
        <Card style={styles.CardItem}>
          <CardItem>
            <Left>
              <View style={{ flex: 0.25, alignItems: "center" }}>
                <Icon
                  style={{ color: "#00c4ff" }}
                  solid
                  name={item.ico}
                  size={50}
                />
              </View>
              <Body>
                <Text style={styles.bodyTextName}>{item.name}</Text>
                <View style={styles.row}>
                  <Text style={styles.bodyTextDesc}>{item.description}</Text>
                  <Text style={styles.bodyTextRate}>{item.rating}</Text>
                  <View style={{ flex: 0.25, marginLeft: 3, marginTop: 1 }}>
                    <Icon
                      style={{ color: "#ffa500" }}
                      solid
                      name={item.star}
                      size={11}
                    />
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={{ marginTop: 2 }}>
                    <Icon
                      style={{ color: "#e5e500" }}
                      solid
                      name={item.statusico}
                      size={9.5}
                    />
                  </View>
                  <Text style={styles.itemStatus}>{item.status}</Text>
                </View>
              </Body>
            </Left>
          </CardItem>
        </Card>
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
  row: {
    flexDirection: "row"
  },
  CardItem: {
    marginLeft: 9,
    marginRight: 9,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 10
  },
  bodyTextName: {
    color: "#434343",
    fontFamily: "Gibson",
    fontSize: 23,
    fontWeight: "400",
    textShadowColor: "rgba(0, 0, 0, 0.16)",
    textShadowOffset: { width: 1, height: 0 },
    textShadowRadius: 4
  },
  bodyTextDesc: {
    color: "#434343",
    fontFamily: "Font Awesome 5 Free",
    fontSize: 11,
    fontWeight: "400",
    textShadowColor: "rgba(0, 0, 0, 0.16)",
    textShadowOffset: { width: 1, height: 0 },
    textShadowRadius: 4
  },
  bodyTextRate: {
    color: "#818080",
    fontFamily: "Segoe UI",
    fontSize: 11,
    fontWeight: "400",
    marginLeft: 10,
    textShadowColor: "rgba(0, 0, 0, 0.16)",
    textShadowOffset: { width: 1, height: 0 },
    textShadowRadius: 4
  },
  itemStatus: {
    color: "#818080",
    fontFamily: "Segoe UI",
    fontSize: 11,
    fontWeight: "400",
    marginLeft: 6
  }
});
