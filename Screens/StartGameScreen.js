import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../Components/UI/PrimaryButton";
import { useState } from "react";
import { Colors } from "../constants/Colors";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = function (inputValue) {
    setEnteredNumber(inputValue);
  };

  const resetInputHandler = function () {
    setEnteredNumber("");
  };
  const confirmInputHandler = function () {
    //validation
    const confirmNumber = parseInt(enteredNumber);

    if (isNaN(confirmNumber) || confirmNumber <= 0 || confirmNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }],
        { cancelable: true }
      );
      return;
    }

    onPickNumber(confirmNumber);
  };

  // console.log(enteredNumber);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        inputMode="numeric"
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={resetInputHandler}>reset</PrimaryButton>
        <PrimaryButton onPress={confirmInputHandler}>confirm</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.primary700,
    marginTop: 100,
    marginHorizontal: 25,
    borderRadius: 15,
    gap: 20,
    padding: 20,
    //android - boxshadow
    elevation: 10,
    //IOS - box-shadow
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    alignItems: "center"
  },

  numberInput: {
    height: 50,
    width: 50,
    color: Colors.accent500,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    textAlign: "center",
    fontSize: 32
    // marginBottom: 20,
  },

  buttonsContainer: {
    flexDirection: "row"
  }
});

export default StartGameScreen;
