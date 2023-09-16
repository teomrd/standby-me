import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const paddingZero = (text: string) => {
  return `${text.length === 1 ? "0" : ""}${text}`;
};

export const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const second = 1 * 1000;

  const start = () => {
    if (!timerId) {
      const intervalId = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, second);
      setTimerId(intervalId);
    }
  };

  const pause = () => {
    clearInterval(timerId);
    setTimerId(null);
  };

  const reset = () => {
    pause();
    setSeconds(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.hour}>
        {paddingZero(`${parseInt(`${seconds / 60}`, 10)}`)}:
        {paddingZero(`${seconds % 60}`)}
      </Text>
      <View style={styles.controls}>
        {!timerId && seconds > 0 && (
          <View style={styles.control}>
            <Button onPress={reset} title="reset" color="#FEFF62" />
          </View>
        )}
        {timerId ? (
          <View style={styles.control}>
            <Button onPress={pause} title="stop" color="#CE0F14" />
          </View>
        ) : (
          <View style={styles.control}>
            <Button onPress={start} title="start" color="#78AE48" />
          </View>
        )}
      </View>
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
    padding: "5%",
  },
  hour: {
    color: "white",
    fontSize: 50,
  },
  controls: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  control: {
    flex: 1,
  },
});
