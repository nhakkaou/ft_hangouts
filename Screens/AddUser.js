import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Avatar from "./Componenets/Avatar";
import styled from "styled-components";
import { UserContext } from "../Context/User";
import { Select } from "./Componenets/Style/AddUser";

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
  const [sex, setSex] = useState("M");
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
        <Avatar sex={sex} />

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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            padding: 10,
          }}
        >
          <TouchableOpacity onPress={() => setSex("M")}>
            <Select
              enabled={sex == "M"}
              color={sex == "M" ? "#0086ff" : "#7867679c"}
            >
              Male
            </Select>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSex("F")}>
            <Select
              onPress={() => setSex("F")}
              enabled={sex == "F"}
              color={sex == "F" ? "#eb7fed" : "#7867679c"}
            >
              Female
            </Select>
          </TouchableOpacity>
          {/* #7867679c */}
        </View>
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
