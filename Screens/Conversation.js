import React, { useEffect } from "react";
import { View } from "react-native";
import Message from "./Componenets/Message";
import Input from "./Componenets/Input";

const Conversation = () => {
  useEffect(() => {}, []);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Message avatarSource={"as"} />
      <Message />
      <Input />
    </View>
  );
};

export default Conversation;
