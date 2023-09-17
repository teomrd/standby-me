import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
  color?: string;
  backgroundColor?: string;
};

const Button = ({
  title,
  onPress,
  backgroundColor = "black",
  color = "white",
}: ButtonProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor,
          },
        ]}
        onPress={onPress}
      >
        <Text style={{ color }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    width: 75,
    height: 75,
    justifyContent: "center",
  },
});
