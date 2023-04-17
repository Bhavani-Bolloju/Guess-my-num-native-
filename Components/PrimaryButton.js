import { View, Text, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={() => console.log("btn clicked")}
        style={({ pressed }) =>
          !pressed
            ? styles.buttonInnerContainer
            : [styles.buttonInnerContainer, styles.pressed]
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    overflow: "hidden",
    margin: 5,
    elevation: 4,
    flex: 1,
  },
  buttonInnerContainer: {
    borderRadius: 15,
    backgroundColor: "#92084d",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    textTransform: "capitalize",
  },
  pressed: {
    // opacity: 0.75,
    backgroundColor: "#a20956",
  },
});

export default PrimaryButton;
