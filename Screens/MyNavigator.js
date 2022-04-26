import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import AddUser from "./AddUser";
import Cnv from "./Conversation";
const MyNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Add">
      <Stack.Screen
        name="Ft-Hangouts"
        component={Home}
        options={{
          headerTitleStyle: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 23,
          },
          headerStyle: {
            backgroundColor: "#00a8ff",
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
          headerStyle: {
            backgroundColor: "#00a8ff",
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
          headerStyle: {
            backgroundColor: "#00a8ff",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MyNavigator;
