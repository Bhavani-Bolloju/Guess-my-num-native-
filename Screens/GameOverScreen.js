import { Text, StyleSheet, View, Image } from "react-native";
import Title from "../Components/UI/Title";
import { Colors } from "../constants/Colors";

import React from "react";

function GameOverScreen() {
  return (
    <View style={styles.screen}>
      <Title style={styles.title}>game over</Title>
      <Image source={require("../Images/success.jpg")} style={styles.image} />
      <Text style={styles.summaryText}>
        Your phone needed <Text>X</Text> rounds to guess the number
        <Text>Y</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: "95%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 40
  },
  title: {
    marginBottom: 40
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: Colors.accent500,
    margin: "auto"
  },
  summaryText: {
    fontSize: 22,
    textAlign: "center",
    marginTop: 40
  }
});

export default GameOverScreen;
