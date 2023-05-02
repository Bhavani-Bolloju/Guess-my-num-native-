import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../constants/Colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
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
    flex: 1
  },
  buttonInnerContainer: {
    borderRadius: 15,
    backgroundColor: Colors.primary600,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    textTransform: "capitalize"
  },
  pressed: {
    // opacity: 0.75,
    backgroundColor: Colors.primary500
  }
});

export default PrimaryButton;
