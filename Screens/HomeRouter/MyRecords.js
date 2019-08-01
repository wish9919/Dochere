import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";

//!uba inline style ghanna epa kela wenva hyganna amarui ne
//TODO style external ghpan kollo harida?..
//hehe... e mokda  bn?
//ahh ewa gahanna epa kiylada kynne bn*?
//*ow bn ehma nathuwa class ekak hdala eke wenama ghapan ara yatama atyenne bn
//hri hri bn mn hadisiyata gahala thibuna ekama copy karala pahalata pahalata gahuwe
//*eka awlk na math ehma thama ghanne ekalla passe ewa palleha ekata dana thamnge code eka clean & clear code ekak hdaganin
//*ela kiri idapnko ehnm mn eka danam
//*Flat list eka athule thwa flat list ekak dana eka poddak balapan aa
//TODO ela kyla dennam, thava ekak ubata style sheet one wdhta hdaganna pluwan, me blpnko

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

  contact = [];

  //TODO oka oya wdhata thunema wena wenama json hdapan
  //adeee bn mn oka kra bn... hri gye na bn.. ara palleha danna therunne na idan pennannam

  listItem = [
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
    },
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
            data={this.about}
            renderItem={this.renderAbout}
            keyExtractor={(item, index) => index.toString()}
          />

          <FlatList
            data={this.listItem}
            renderItem={this.renderList}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>
    );
  }

  renderAbout = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.birthday}</Text>
    </View>
  );

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
            {/* 
             details */}
            <View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1.3 }}>
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
                <View style={{ flex: 1.3 }}>
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
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1.3 }}>
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
                    {item.c1}
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
                    {item.c2}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1.3 }}>
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
                    {item.d1}
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
                    {item.d2}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1.3 }}>
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
                    {item.e1}
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
                    {item.e2}
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
