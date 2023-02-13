import React from "react";
import {
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import User from "./Componenets/User";
const Home = ({ navigation }) => {
  const renderListItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
        <View
          style={{
            marginBottom: 40,
          }}
        >
          <User
            name={item.name}
            time={item.time}
            message={item.message}
            read={item.read}
            img={item.img}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <View>
        <StatusBar backgroundColor="#9A1854" />
        <FlatList
          data={[
            {
              name: "John Doe",
              time: "12:00",
              img: "",
              message: "Hello",
              read: false,
            },
            {
              name: "Sobhan Joodi",
              time: "12:00",
              message: "Hello",
              img: "https://images.unsplash.com/photo-1568739253582-afa48fbcea47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
              read: true,
            },
            {
              name: "Mia Khalifa",
              time: "12:00",
              img: "https://images.unsplash.com/photo-1553860214-87b92d6c1e22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
              message: "Hello",
              read: true,
            },
          ]}
          renderItem={renderListItem}
          keyExtractor={(item) => item.name}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
