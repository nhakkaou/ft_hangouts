import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [ColorSelected, setColor] = useState("#00a8ff");
  useEffect(() => {
    AsyncStorage.getItem("Color").then((color) => {
      if (color) {
        console.log("COLOR: ", color);
        setColor(color);
      }
    });
  }, []);
  const ft_ChangeColor = async (color) => {
    await AsyncStorage.setItem("Color", color);
    setColor(color);
  };
  return (
    <UserContext.Provider
      value={{
        ColorSelected,
        ft_ChangeColor,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
