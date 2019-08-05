import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput
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
          <TouchableOpacity style={styles.b1}>
            <Icon
              style={{ color: "#ffffff", margin: 2 }}
              solid
              name="phone"
              size={36}
            />
            <Text style={styles.btntxt}>Call Doctor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.b2}>
            <Icon
              style={{ color: "#ffffff", margin: 2 }}
              solid
              name="search-location"
              size={36}
            />
            <Text style={styles.btntxt}>Nearby</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.b3}>
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
            top: 70,
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

        <View
          style={{
            marginTop: 11,
            flexDirection: "row",
            position: "absolute",
            zIndex: 2,
            shadowColor: "rgba(69, 91, 99, 0.08)",
            shadowOffset: { width: 12, height: 0 },
            shadowRadius: 16,
            borderRadius: 12,
            width: 343,
            height: 52,
            marginLeft: 40,
            marginRight: 16
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
              borderRadius: 20,
              flex: 5
            }}
          >
            <TouchableOpacity>
              <Icon
                name="stream"
                size={20}
                color="#8a8888"
                style={{
                  marginLeft: 15,
                  marginRight: 15,
                  marginTop: 15
                }}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Search Here"
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
            <TouchableOpacity>
              <Icon
                name="search"
                size={20}
                color="grey"
                style={{
                  marginLeft: 15,
                  marginRight: 15,
                  marginTop: 15
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

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
    left: 68,
    right: 68,
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
  },
  b1: {
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
  b2: {
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
  b3: {
    width: 81,
    height: 62,
    borderRadius: 8,
    backgroundColor: "#353a50",
    marginTop: 8,
    marginBottom: 8,
    marginRight: 4,
    marginLeft: 4,
    alignItems: "center"
  }
});
