import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import Avatar from "./Avatar";
const UserView = styled.View`
  width: 100%;
  height: 12%;
  background-color: #fff;
  flex-direction: row;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
`;
const NameView = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
`;
const TextView = styled.Text`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "12")}px;
  font-weight: {
    ${(props) => (!props.read ? "bold" : "normal")}
  }
`;
const User = ({ name, time, message, read = true }) => {
  return (
    <UserView>
      <NameView>
        <Avatar />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            margin: 15,
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              width: "70%",
            }}
          >
            <TextView fontSize={18} read={read}>
              {name}
            </TextView>
            <TextView fontSize={13} read={read}>
              {time}
            </TextView>
          </View>
          <View>
            <TextView fontSize={13} read={read}>
              {message}
            </TextView>
          </View>
        </View>
      </NameView>
    </UserView>
  );
};

export default User;
