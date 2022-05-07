import React, { useEffect } from "react";
import { View, TextInput } from "react-native";
import Message from "./Componenets/Message";

const Conversation = () => {
  useEffect(() => {}, []);
  return (
    <View>
      <Message avatarSource={"as"} />
      <Message />
    </View>
  );
};

export default Conversation;
