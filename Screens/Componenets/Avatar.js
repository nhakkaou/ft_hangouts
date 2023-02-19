import React from "react";
import { ImageBackground } from "react-native";
import { AvatarUser } from "./Style/Profile";
const Avatar = (props) => {
  const src = !props.source
    ? props.sex === "F"
      ? require("../../assets/avatarF.png")
      : require("../../assets/avatar.png")
    : require("../../assets/avatar.png");
  return (
    <AvatarUser style={props?.style}>
      <ImageBackground
        source={src}
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
