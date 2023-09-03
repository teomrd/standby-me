import { StyleSheet, Text, View } from 'react-native';

export const Dashboard = () => {
  return (
    <View>
      <Text>Hello from Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});