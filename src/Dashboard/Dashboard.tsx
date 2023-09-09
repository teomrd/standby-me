import { StyleSheet, View } from "react-native";

import { Clock } from "../Widgets/Clock/Clock";

export const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "50%",
          flex: 1,
          backgroundColor: "#000",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Clock />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
