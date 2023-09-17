import { useKeepAwake } from "expo-keep-awake";
import { StyleSheet, View } from "react-native";

import { Clock } from "../Widgets/Clock/Clock";
import { Stopwatch } from "../Widgets/Stopwatch/Stopwatch";

export const Dashboard = () => {
  useKeepAwake();
  return (
    <View style={styles.container}>
      <View style={styles.widget}>
        <Clock />
      </View>
      <View style={styles.widget}>
        <Stopwatch />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  widget: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
