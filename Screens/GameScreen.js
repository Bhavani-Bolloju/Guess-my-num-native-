import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Alert } from "react-native";
import Title from "../Components/UI/Title";
import NumberContainer from "../Components/Game/NumberContainer";
import PrimaryButton from "../Components/UI/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minNum = 1;
let maxNum = 100;

function GameScreen({ choosenNum, onGameOver }) {
  const initialNum = generateRandomBetween(minNum, maxNum, choosenNum);

  const [currentGuess, setCurrentGuess] = useState(initialNum);

  const nextGuessHandler = function (direction) {
    if (choosenNum === currentGuess) {
      return;
    }

    if (
      (direction === "lower" && currentGuess < choosenNum) ||
      (direction === "higher" && currentGuess > choosenNum)
    ) {
      Alert.alert(
        "Misleading Hint .... 😑😑",
        "Pleae give a proper hint",
        [
          {
            text: "sorry",
            style: "cancel",
            onPress: () => console.log("clicked")
          }
        ],
        { cancelable: true }
      );
      return;
    }

    if (direction === "lower") {
      const guessNum = generateRandomBetween(
        minNum,
        currentGuess,
        currentGuess
      );
      setCurrentGuess(guessNum);
    } else {
      const guessNum = generateRandomBetween(
        currentGuess,
        maxNum,
        currentGuess
      );
      setCurrentGuess(guessNum);
    }
  };

  useEffect(() => {
    if (choosenNum === currentGuess) {
      onGameOver();
    }
  }, [choosenNum, currentGuess]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="remove-outline" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
            <Ionicons name="add-outline" size={24} color="white" />
          </PrimaryButton>
        </View>
      </View>
      {/* <View>log rounds</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    marginTop: 10
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    gap: 10
  }
});

export default GameScreen;
