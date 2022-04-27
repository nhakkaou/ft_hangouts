import React from "react";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import Avatar from "./Componenets/Avatar";

const Profile = () => {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          source={require("../assets/babel.config.jpeg")}
          style={{ width: "100%", height: 200, position: "relative" }}
        />
        <View
          style={{
            top: 40,
            left: 50,
            position: "absolute",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar />
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 5 }}>
              Nour Dine
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "600" }}>@King_nour</Text>
          </View>
        </View>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
