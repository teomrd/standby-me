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
      <Text style={styles.hour}>{`${format(date, "HH")}:${format(
        date,
        "mm",
      )}`}</Text>
      <Text style={styles.date}>{`${format(date, "EEE")}, ${format(
        date,
        "dd MMMM",
      )}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: "5%",
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 1,
  },
  hour: {
    color: "white",
    fontSize: 50,
  },
  date: {
    color: "white",
    fontSize: 20,
  },
});
