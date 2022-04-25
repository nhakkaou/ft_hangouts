import React from "react";
import { View, ImageBackground, Image } from "react-native";
import styled from "styled-components";
const AvatarUser = styled.View`
  width: 70;
  height: 70;
  border-radius: 50px;
  margin: 5px;
  box-shadow: 0px 0px 10px #000;
`;
const Avatar = () => {
  return (
    <AvatarUser>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        }}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
        }}
        imageStyle={{
          borderRadius: 50,
        }}
      />
    </AvatarUser>
  );
};

export default Avatar;
