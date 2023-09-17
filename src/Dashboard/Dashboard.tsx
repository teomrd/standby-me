import { useDeviceOrientation } from "@react-native-community/hooks";
import { useKeepAwake } from "expo-keep-awake";
import { StyleSheet, View } from "react-native";

import { Clock } from "../Widgets/Clock/Clock";
import { Stopwatch } from "../Widgets/Stopwatch/Stopwatch";

export const Dashboard = () => {
  useKeepAwake();
  const orientation = useDeviceOrientation();

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: orientation === "landscape" ? "row" : "column",
        },
      ]}
    >
      <View style={[styles.widget, { flex: 1 }]}>
        <Clock />
      </View>
      <View style={[styles.widget, { flex: 1 }]}>
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
    width: "100%",
  },
  widget: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
