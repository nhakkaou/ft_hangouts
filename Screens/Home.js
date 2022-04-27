import React from "react";
import { View, Text, FlatList, StatusBar, SafeAreaView } from "react-native";
import User from "./Componenets/User";
const renderListItem = ({ item }) => {
  console.log(item);
  return (
    <View
      style={{
        marginBottom: 40,
        width: "100%",
        height: 100,
        backgroundColor: "#000",
      }}
    >
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
    <SafeAreaView>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#9A1854" />
        {/* <FlatList
        style={{ width: "100%", height: "100%", backgroundColor: "yellow" }}
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
        <User
          name="Lee Hdak"
          time="2 min"
          message="hello world!"
          read={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
