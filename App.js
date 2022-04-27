import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MyNavigator from "./Screens/MyNavigator";
import Profile from "./Screens/Profile";
import Contacts from "./Screens/Contacts";
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
          name="Messages"
          component={MyNavigator}
        />
        <Tab.Screen
          options={{
            headerLeft: () => (
              <MaterialCommunityIcons
                name="arrow-left"
                size={20}
                style={{
                  marginLeft: 10,
                }}
              />
            ),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="contacts"
                color={color}
                size={size}
              />
            ),
          }}
          name="Contacts"
          component={Contacts}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
