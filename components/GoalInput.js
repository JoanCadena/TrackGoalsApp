import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState();
  const goalInputHandler = (enteredGoal) => {
    setEnteredGoal(enteredGoal);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        value={enteredGoal}
        onChangeText={goalInputHandler}
      />
      <Button title="Add Goal!" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "75%",
    padding: 8,
  },
});

export default GoalInput;
