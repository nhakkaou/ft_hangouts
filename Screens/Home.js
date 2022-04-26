import React from "react";
import { View, Text, FlatList, StatusBar } from "react-native";
import User from "./Componenets/User";
const renderListItem = ({ item }) => {
  console.log(item);
  return (
    <View style={{ marginBottom: 40, backgroundColor: "#9A1854" }}>
      <User
        name={item.name}
        time={item.time}
        message={item.message}
        read={false}
      />
    </View>
  );
};
const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#9A1854" />
      {/* <FlatList
        style={{ flex: 1, backgroundColor: "green" }}
        data={[
          {
            name: "John Doe",
            time: "12:00",
            message: "Hello",
            read: true,
          },
          {
            name: "John Doe",
            time: "12:00",
            message: "Hello",
            read: true,
          },
          {
            name: "John Doe",
            time: "12:00",
            message: "Hello",
            read: true,
          },
        ]}
        renderItem={renderListItem}
        keyExtractor={(item) => item.name}
      /> */}
      <User name="Lee Hdak" time="2 min" message="hello world!" read={false} />
    </View>
  );
};

export default Home;
