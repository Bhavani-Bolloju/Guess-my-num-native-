import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./Screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./Screens/GameScreen";
import { Colors } from "./constants/Colors";
import GameOverScreen from "./Screens/GameOverScreen";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);

  const pickedNumberHandler = function (number) {
    setPickedNumber(number);
  };

  const gameOverHandler = function () {
    setIsGameOver(true);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (pickedNumber) {
    screen = (
      <GameScreen choosenNum={pickedNumber} onGameOver={gameOverHandler} />
    );
  }

  if (isGameOver) {
  }
  screen = <GameOverScreen />;

  return (
    <LinearGradient
      colors={[Colors.primary600, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./Images/background.png")}
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },

  backgroundImage: {
    opacity: 0.15
  }
});
