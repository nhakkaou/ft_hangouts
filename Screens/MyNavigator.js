import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import AddUser from "./AddUser";
import Cnv from "./Conversation";
import { Image } from "react-native";
const MyNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Ft-Hangouts">
      <Stack.Screen
        name="Hangouts"
        component={Home}
        options={{
          headerTitleStyle: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 23,
          },
        }}
      />
      <Stack.Screen
        name="Add"
        component={AddUser}
        options={{
          headerTitleStyle: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 23,
          },
        }}
      />
      <Stack.Screen
        name="Messages"
        component={Cnv}
        options={{
          headerTitleStyle: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 23,
          },
          headerRight: () => <Image source={require("../assets/call.png")} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default MyNavigator;
