import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Avatar from "./Componenets/Avatar";
import styled from "styled-components";
import { UserContext } from "../Context/User";

const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 20px;
  padding: 10px;
`;
const AddUser = () => {
  const { addContat } = useContext(UserContext);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const saveContact = async () => {
    if (phone && name) await addContat(phone, name);
  };
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

        <Input
          placeholder="Contact name"
          placeholderTextColor="gray"
          onChangeText={(text) => {
            setName(text);
          }}
        />
        <Input
          placeholder="Phone number"
          placeholderTextColor="gray"
          onChangeText={(text) => {
            setPhone(text);
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
          onPress={saveContact}
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
