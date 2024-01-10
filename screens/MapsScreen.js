import React, { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

const MapsScreen = ({ route }) => {
    const navigation = useNavigation();

    const data = route?.params?.data;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
}, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -7.80139000 || 0, // Latitude default (gantilah dengan nilai default yang sesuai)
          longitude: 110.36472000 || 0, // Longitude default (gantilah dengan nilai default yang sesuai)
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Menampilkan marker pada lokasi dari data API */}
        
          <Marker
            pinColor="#00ff00"
            coordinate={{
              latitude: -7.80139000, // Gantilah dengan latitude dari data API
              longitude: 110.36472000, // Gantilah dengan longitude dari data API
            }}
            title="Lokasi Tujuan"
          />
       
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapsScreen;
