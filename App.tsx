import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { Dashboard } from "./src/Dashboard/Dashboard";

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    "Square-Dot-Matrix": require("./assets/fonts/Square-Dot-Matrix.ttf"),
  });

  return (
    <View style={styles.container}>
      {fontsLoaded ? <Dashboard /> : <ActivityIndicator />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
