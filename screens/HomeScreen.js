import React, { useLayoutEffect } from "react";
import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#6FCF35" }}>

      {/* Second Section */}
      {/* <View style={{ paddingHorizontal: 6, marginTop: 8, marginBottom: 20 }}>
        <Text style={{ color: "#3C6072", fontSize: 42 }}>Enjoy the trip with</Text>
        <Text style={{ color: "#00BCC9", fontSize: 38, fontWeight: "bold" }}>Good Moments</Text>
      </View> */}

      {/* Image container */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          style={{ width: "100%", height: "100%", objectFit: "cover", marginTop: 20 }}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{ position: "absolute", bottom: 120, width: 24, height: 24, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth: 4, borderColor: "#00BCC9", borderRadius: 12, alignItems: "center", justifyContent: "center" }}
        >
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            style={{ width: 80, height: 60, alignItems: "center", justifyContent: "center", borderRadius: 40, backgroundColor: "#44B300" }}
          >
            <Text style={{ color: "white", fontSize: 36, fontWeight: "bold" }}>Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
