import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
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
      <ScrollView>
        <Message avatarSource={"as"} />
        <Message />
      </ScrollView>
      <Input
        style={{
          alignContent: "flex-end",
        }}
      />
    </View>
  );
};

export default Conversation;
