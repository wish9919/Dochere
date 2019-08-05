import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";

//google-map
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome5";

import ShortcutScreen from "./ShortcutScreen";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const fontSize = Dimensions.get("window").fontScale;

export default class MapViewHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      dataSource1: [],
      Maintaince: "",
      markers: [
        {
          title: "hello",
          coordinates: {
            latitude: -33.8585416,
            longitude: 151.2100441
          }
        },
        {
          title: "hello",
          coordinates: {
            latitude: 3.149771,
            longitude: 101.655449
          }
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tab3}>
          <TouchableOpacity style={styles.buttoninnactive}>
            <Icon
              style={{ color: "#ffffff", margin: 2 }}
              solid
              name="phone"
              size={36}
            />
            <Text style={styles.btntxt}>Call Doctor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonnactive}>
            <Icon
              style={{ color: "#ffffff", margin: 2 }}
              solid
              name="search-location"
              size={36}
            />
            <Text style={styles.btntxt}>Nearby</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttoninnactive}>
            <Icon
              style={{ color: "#ffffff", margin: 2 }}
              solid
              name="shoe-prints"
              size={36}
            />
            <Text style={styles.btntxt}>Home Visit</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={this.Navi1}
          style={{
            width: 60,
            height: 60,
            position: "absolute",
            backgroundColor: "#454f63",
            alignContent: "center",
            justifyContent: "center",
            borderRadius: 35,
            right: 10,
            top: 10,
            zIndex: 1
          }}
        >
          <Icon
            style={{
              color: "#ffffff",
              margin: 2,
              textAlign: "center"
            }}
            solid
            name="grip-horizontal"
            size={36}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.Navi1}
          style={{
            width: 60,
            height: 60,
            position: "absolute",
            alignContent: "center",
            justifyContent: "center",
            bottom: 95,
            right: 10,
            zIndex: 1,
            shadowColor: "rgba(69, 91, 99, 0.1)",
            shadowOffset: { width: 12, height: 0 },
            shadowRadius: 16,
            borderRadius: 12,
            backgroundColor: "#ffffff"
          }}
        >
          <Icon
            style={{
              color: "#454f63",
              margin: 2,
              textAlign: "center"
            }}
            solid
            name="crosshairs"
            size={36}
          />
        </TouchableOpacity>

        <MapView
          style={{ height: height, width: width }}
          region={{
            latitude: 7.8731,
            longitude: 80.7718,
            latitudeDelta: 1.0922,
            longitudeDelta: 1.0421
          }}
          showsUserLocation={true}
        >
          {this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={marker.coordinates}
              title={marker.title}
            />
          ))}
        </MapView>
        {/* <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: "red",
              width: width / 2,
              height: width / 2
            }}
          />
          <View
            style={{
              backgroundColor: "blue",
              width: width / 2,
              height: width / 2
            }}
          />
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tab3: {
    backgroundColor: "red",
    backgroundColor: "#2a2e43",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
    bottom: 10,
    left: 70,
    right: 70,
    borderRadius: 20
  },
  buttoninnactive: {
    width: 81,
    height: 62,
    borderRadius: 8,
    backgroundColor: "#353a50",
    marginTop: 8,
    marginBottom: 8,
    marginRight: 4,
    marginLeft: 4,
    alignItems: "center"
  },
  buttonnactive: {
    width: 81,
    height: 62,
    borderRadius: 8,
    backgroundColor: "#00c4ff",
    marginTop: 8,
    marginBottom: 8,
    marginRight: 4,
    marginLeft: 4,
    alignItems: "center"
  },
  btntxt: {
    color: "#ffffff",
    fontFamily: "Gibson",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center"
  }
});
