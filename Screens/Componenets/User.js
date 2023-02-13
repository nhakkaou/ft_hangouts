import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components";
import Avatar from "./Avatar";

const UserView = styled.View`
  width: 100%;
  height: 15%;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
`;
const NameView = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

const User = ({ name, time, message, read = true, img }) => {
  return (
    <UserView read={read}>
      <NameView>
        <Avatar source={img} />
        <View
          style={{
            // backgroundColor: "yellow",
            height: 70,
            padding: 15,
            width: "80%",
            alignContent: "center",
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: !read ? "bold" : "normal" }}
            >
              {name}
            </Text>
            <Text
              style={{ fontSize: 13, fontWeight: !read ? "bold" : "normal" }}
            >
              {time}
            </Text>
          </View>
          <Text style={{ fontSize: 17, fontWeight: !read ? "bold" : "normal" }}>
            {message}
          </Text>
        </View>
      </NameView>
    </UserView>
  );
};

export default User;
