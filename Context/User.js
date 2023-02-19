import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SQLite from "expo-sqlite";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [ColorSelected, setColor] = useState("#00a8ff");
  const [db, setDb] = useState(SQLite.openDatabase("example.db"));
  const getContat = () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM users;",
          null,
          (_, resultSet) => resolve(resultSet),
          reject
        );
      });
    });
  };
  const addContat = (phone, name) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO users (name, phone) VALUES (?, ?);",
          [name, phone],
          (_, resultSet) => resolve(resultSet),
          (err) => console.log("ERROR", err)
        );
      });
    });
  };

  useEffect(() => {
    AsyncStorage.getItem("Color").then((color) => {
      if (color) {
        setColor(color);
      }
    });
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(30) NOT NULL UNIQUE,phone VARCHAR(30) NOT NULL UNIQUE, pic BLOB, sex ENUM ('F', 'M'))"
      );
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
        getContat,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
