import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

const Input = () => {
  const [text, setText] = useState("");
  return (
    <View
      style={{
        alignContent: "flex-end",
        flexDirection: "row",
        borderColor: "#fff",
        // backgroundColor: "#fff",
        justifyContent: "space-around",
      }}
    >
      <TextInput
        style={{
          width: "90%",
          height: 50,
          padding: 5,
          borderWidth: 0.1,
          borderRadius: 50,
        }}
        value={text}
        placeholder="Type your SMS ...!"
        onChange={(e) => setText(e.target.value)}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/send.png")}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;
