import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyNavigator from "./Screens/MyNavigator";

function App() {
  return (
    <NavigationContainer>
      <MyNavigator />
    </NavigationContainer>
  );
}

export default App;
