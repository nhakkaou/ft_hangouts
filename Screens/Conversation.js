import React, { useEffect } from "react";
import { View, PermissionsAndroid } from "react-native";
import Message from "./Componenets/Message";

const Conversation = () => {
  useEffect(() => {
    async function sendMessages() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_SMS,
          // PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
          // PermissionsAndroid.PERMISSIONS.SEND_SMS,
          {
            title: "SMS Permission",
            message: "SMS Permission is required to read your messages",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );
        console.log(granted);
        if (granted === PermissionsAndroid.RESULTS.GRANTED)
          console.log("You can use the SMS");
        else alert("SMS permission denied");
      } catch (err) {
        console.warn(err);
      }
    }
    sendMessages();
  }, []);
  return (
    <View>
      <Message avatarSource={"as"} />
      <Message />
    </View>
  );
};

export default Conversation;
