import React from "react";
import { View, Text } from "react-native";
import Avatar from "./Avatar";

const Contact = ({ name, phone, show }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        height: 80,
        alignItems: "center",
        backgroundColor: "#fff",
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#e5e5e5",
      }}
    >
      <Avatar />
      <View
        style={{
          marginLeft: 20,
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 18, marginBottom: 3 }}>{name}</Text>
        <Text>{phone}</Text>
      </View>
      {show && <View></View>}
    </View>
  );
};

export default Contact;
