import React from "react";
import { ImageBackground } from "react-native";
import { AvatarUser } from "./Style/Profile";
const Avatar = (props) => {
  return (
    <AvatarUser style={props?.style}>
      <ImageBackground
        source={props.source | require("../../assets/avatar.png")}
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
