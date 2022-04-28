import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Color } from "./Style/Profile";
const ChangeColor = () => {
  const colors = [
    "#00a8ff",
    "#69d2e7",
    "#a7dbd8",
    "#e0e4cc",
    "#f38630",
    "#fa6900",
    "#fe4365",
    "#fc9d9a",
    "#f9cdad",
    "#c8c8a9",
    "#83af9b",
    "#ecd078",
    "#d95b43",
    "#c02942",
    "#542437",
    "#53777a",
    "#556270",
    "#4ecdc4",
    "#c7f464",
    "#ff6b6b",
    "#c44d58",
  ];
  return (
    <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
      {colors.map((color, key) => (
        <TouchableOpacity>
          <Color color={color} key={key} selected={key === 0 ? true : false} />
        </TouchableOpacity>
      ))}
      <TouchableOpacity>
        <View
          style={{
            borderRadius: 50,
            backgroundColor: "gray",
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
          }}
        >
          <Text style={{ fontSize: 20, color: "#fff" }}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ChangeColor;
