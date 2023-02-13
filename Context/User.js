import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as SQLite from "expo-sqlite";
import * as Permissions from "expo-permissions";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  // const db = SQLite.openDatabase("ft_hangout.db");
  // db.transaction(function (tx) {
  //   // tx.executeSql(
  //   //   "INSERT INTO users (name, phone) VALUES (?,?)",
  //   //   [""],
  //   tx.executeSql("select * from users", [], (tx, results) => {
  //     console.log("Results", results.rowsAffected);
  //     // if (results.rowsAffected > 0) {
  //     //   Alert.alert(
  //     //     "Success",
  //     //     "You are Registered Successfully",
  //     //     [
  //     //       {
  //     //         text: "Ok",
  //     //         onPress: () => navigation.navigate("HomeScreen"),
  //     //       },
  //     //     ],
  //     //     { cancelable: false }
  //     //   );
  //     // } else alert("Registration Failed");
  //   });
  // });

  async function requestSMSPermission() {
    const { status } = await Permissions.askAsync(Permissions.SMS);
    if (status === "granted") {
      console.log("SMS permission granted");
    } else {
      console.log("SMS permission not granted");
    }
  }
  const [ColorSelected, setColor] = useState("#00a8ff");
  useEffect(() => {
    AsyncStorage.getItem("Color").then((color) => {
      if (color) {
        setColor(color);
      }
    });
    async function getPermision() {
      await requestSMSPermission();
    }
    getPermision();
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
