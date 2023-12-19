import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Canvas, Shader, Fill } from "@shopify/react-native-skia";

import source from "./shader.sksl";

const SimpleShader = () => {
  return (
    <Canvas style={{ width: 256, height: 256 }}>
      <Fill>
        <Shader source={source} />
      </Fill>
    </Canvas>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <SimpleShader />
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
