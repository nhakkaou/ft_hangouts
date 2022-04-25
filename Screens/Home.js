import React from "react";
import { View, Text } from "react-native";
import User from "./Componenets/User";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <User name="Lee Hdak" time="2 min" message="hello world!" />
    </View>
  );
};

export default Home;
