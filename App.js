import Constants from "expo-constants";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState();
  const [goalsList, setGoalsList] = useState([]);
  const goalInputHandler = (enteredGoal) => {
    setEnteredGoal(enteredGoal);
  };
  const addGoalHandler = () => {
    setGoalsList((previousGoals) => [
      ...previousGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal!" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(goalData) => {
            return (
              <View style={styles.goalItem}>
                {/* key={goalData.item.key} */}
                <Text style={styles.goalText}>{goalData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
