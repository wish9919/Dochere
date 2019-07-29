import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

//google-map
import MapView from "react-native-maps";

const { width, height } = Dimensions.get("window");

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
  }
});
