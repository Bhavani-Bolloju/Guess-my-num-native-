import { Text, StyleSheet } from "react-native";

import React from "react";

function GameOverScreen() {
  return <Text style={styles.container}>game over</Text>;
}

const styles = StyleSheet.create({
  container: {
    fontSize: 30
  }
});

export default GameOverScreen;
