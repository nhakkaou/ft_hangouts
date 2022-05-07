import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MyNavigator from "./Screens/MyNavigator";
import Profile from "./Screens/Profile";
import Contacts from "./Screens/Contacts";
import { UserContext } from "./Context/User";
const Tab = createBottomTabNavigator();
function App() {
  const [MyTheme, setTheme] = React.useState({
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#00a8ff",
      background: "rgb(242, 242, 242)",
      card: "#00a8ff",
      text: "#fff",
      border: "rgb(200, 200, 200)",
      notification: "rgb(255, 45, 85)",
      divider: "rgb(200, 200, 200)",
      placeholder: "rgb(200, 200, 200)",
      backdrop: "rgb(242, 242, 242)",
    },
  });
  const data = React.useContext(UserContext);
  React.useEffect(() => {
    if (data?.ColorSelected)
      setTheme({
        ...MyTheme,
        colors: {
          ...MyTheme.colors,
          primary: data?.ColorSelected,
          card: data?.ColorSelected,
        },
      });
  }, [data?.ColorSelected]);
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={{
          headerTitleStyle: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 23,
          },
          tabBarStyle: {
            backgroundColor: "rgb(255, 255, 255)",
          },
        }}
      >
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
          name="Home"
          component={MyNavigator}
        />
        <Tab.Screen
          options={{
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
