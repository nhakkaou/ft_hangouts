import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import Avatar from "./Avatar";
const UserView = styled.View`
  width: 100%;
  height: 12%;
  background-color: #aaffcc;
  flex-direction: row;
`;
const NameView = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
`;
const User = ({ name, time, message }) => {
  return (
    <UserView>
      <NameView>
        <Avatar />
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
            margin: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{name}</Text>
          <Text>{time}</Text>
        </View>
      </NameView>
      <Text>{message}</Text>
    </UserView>
  );
};

export default User;
