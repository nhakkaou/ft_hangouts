import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
const MyNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="ft_hangouts" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MyNavigator;
