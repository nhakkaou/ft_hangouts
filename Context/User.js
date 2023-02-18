import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SQLite from "expo-sqlite";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const db = SQLite.openDatabase(
    {
      name: "ft_hangout.db",
      createFromLocation: "~example.db",
      location: "Library",
    },
    (err) => console.log("Success", err),
    (err) => console.log("Error", err)
  );
  console.log(db);
  const addContat = (phone, name) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql("SELECT * FROM users;", [], resolve, reject);
      });
    });
  };

  const [ColorSelected, setColor] = useState("#00a8ff");
  useEffect(() => {
    AsyncStorage.getItem("Color").then((color) => {
      if (color) {
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
        addContat,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
