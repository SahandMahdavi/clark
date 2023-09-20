import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { AppNavigator } from "./navigators";
import { IconsConfigProvider } from "./components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <SafeAreaView style={styles.container}>
          <IconsConfigProvider>
            <AppNavigator />
          </IconsConfigProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
