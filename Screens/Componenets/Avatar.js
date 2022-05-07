import React from "react";
import { ImageBackground } from "react-native";
import { AvatarUser } from "./Style/Profile";
const Avatar = (props) => {
  console.log(props);
  const url = props.source
    ? props.source
    : "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80";
  return (
    <AvatarUser style={props?.style}>
      <ImageBackground
        source={{
          uri: url,
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
