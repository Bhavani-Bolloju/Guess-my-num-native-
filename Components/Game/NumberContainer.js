import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderColor: Colors.accent500,
    borderWidth: 3,
    borderColor: Colors.accent500,
    marginVertical: 20,
    padding: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 38
  }
});

export default NumberContainer;
