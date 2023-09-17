import { format } from "date-fns";
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
      <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={[styles.hour]}
      >{`${format(date, "HH")}:${format(date, "mm")}`}</Text>
      <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={[styles.date]}
      >{`${format(date, "EEE")}, ${format(date, "dd MMMM")}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  hour: {
    color: "white",
    fontSize: 100,
  },
  date: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
  },
});
