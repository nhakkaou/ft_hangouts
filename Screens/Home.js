import React from "react";
import { View, Text, FlatList } from "react-native";
import User from "./Componenets/User";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <User name="Lee Hdak" time="2 min" message="hello world!" read={false} />
      <User name="Lee Hdak" time="2 min" message="hello world!" />
      <User name="Lee Hdak" time="2 min" message="hello world!" />
      <User name="Lee Hdak" time="2 min" message="hello world!" />
      <User name="Lee Hdak" time="2 min" message="hello world!" />
      <User name="Lee Hdak" time="2 min" message="hello world!" />
      <User name="Lee Hdak" time="2 min" message="hello world!" />
      <User name="Lee Hdak" time="2 min" message="hello world!" />
    </View>
  );
};

export default Home;
