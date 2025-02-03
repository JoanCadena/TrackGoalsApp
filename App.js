import Constants from "expo-constants";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const addGoalHandler = (enteredGoal) => {
    setGoalsList((previousGoals) => [
      ...previousGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(goalData) => {
            return <GoalItem text={goalData.item.text} />;
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

  goalsContainer: {
    flex: 5,
  },
});
