import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000 * 1);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {date.getHours()}:{date.getMinutes()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 1,
  },
  text: {
    color: "white",
  },
});
