import React from "react";
import { Pressable, Text } from "react-native";

export default function Button(props) {
  const { text, handler, btnStyle, textStyle } = props;

  return (
      <Pressable 
        onPress={handler}
        style={btnStyle}
      >
        <Text style={textStyle}>{text}</Text>
      </Pressable>
  );
}; 