import React from "react";
import { Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    borderWidth: 2,
    borderColor: Colors.accent200,
    color: Colors.accent200,
    padding: 10,
    textAlign: "center"
  }
});

export default Title;
