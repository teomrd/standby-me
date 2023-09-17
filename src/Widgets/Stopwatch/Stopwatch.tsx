import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "../../Button/Button";

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

  const isPaused = !timerId && seconds > 0;

  return (
    <View style={styles.container}>
      <Text style={styles.hour} adjustsFontSizeToFit numberOfLines={1}>
        {paddingZero(`${parseInt(`${seconds / 60}`, 10)}`)}:
        {paddingZero(`${seconds % 60}`)}
      </Text>
      <View style={styles.controls}>
        {isPaused && (
          <View style={styles.control}>
            <Button onPress={reset} title="reset" backgroundColor="#333333" />
          </View>
        )}
        {timerId ? (
          <View style={styles.control}>
            <Button
              onPress={pause}
              title="stop"
              backgroundColor="rgba(205, 15, 20, 0.5)"
            />
          </View>
        ) : (
          <View style={styles.control}>
            <Button
              onPress={start}
              title={isPaused ? "restart" : "start"}
              backgroundColor="rgba(104, 206, 103, 0.25)"
              color="rgba(104, 206, 103, 1)"
            />
          </View>
        )}
      </View>
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
  controls: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  control: {
    margin: 10,
  },
});
