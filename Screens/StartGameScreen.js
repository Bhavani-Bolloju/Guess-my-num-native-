import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        inputMode="numeric"
      />
      <View style={styles.buttonsContainer}>
        <PrimaryButton>reset</PrimaryButton>
        <PrimaryButton>confirm</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#72063c",
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
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 50,
    color: "#ddb52f",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    textAlign: "center",
    fontSize: 32,
    // marginBottom: 20,
  },

  buttonsContainer: {
    flexDirection: "row",
  },
});

export default StartGameScreen;
