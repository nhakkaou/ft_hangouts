import React from "react";
import {
  View,
  Text,
  InputAccessoryView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Avatar from "./Componenets/Avatar";
import styled from "styled-components";

const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 20px;
  padding: 10px;
`;
const AddUser = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <View
        style={{ width: "80%", justifyContent: "center", alignItems: "center" }}
      >
        <Avatar />
        <Text>AddUser</Text>
        <Input
          placeholder="Contact name"
          placeholderTextColor="gray"
          onChangeText={(text) => {
            console.log(text);
          }}
        />
        <Input
          placeholder="Phone number"
          placeholderTextColor="gray"
          onChangeText={(text) => {
            console.log(text);
          }}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#00a8ff",
            width: "50%",
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Save contact
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddUser;
