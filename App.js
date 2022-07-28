import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import RealmContext from "./src/db";

const { RealmProvider } = RealmContext;

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const AppProvider = () => {
  return (
    <RealmProvider>
      <App />
    </RealmProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppProvider;
