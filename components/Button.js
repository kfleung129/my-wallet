import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function Button(props) {
  const { text, handler, btnStyle, textStyle } = props;

  return (
      <TouchableOpacity 
        onPress={handler}
        style={btnStyle}
      >
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
  );
}; 