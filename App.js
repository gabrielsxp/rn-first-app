import React, { useState } from 'react';
import GoalInput from './components/GoalInput/index';
import Goal from './components/Goal/index';
import Goals from './components/Goals/index';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoal(text) {
    const content = { text, key: Math.random().toString() };
    let goalsCopy = [...goals];
    goalsCopy = goalsCopy.concat(content);
    setGoals([...goalsCopy]);
  }

  function removeGoal(index) {
    let goalsCopy = [...goals];
    goalsCopy.splice(index, 1);
    setGoals([...goalsCopy]);
  }

  return (
    <View style={{ paddingTop: 40 }}>
      <GoalInput addGoal={addGoal} />
      <View>
        {
          goals.length === 0 && <Text style={styles.emptyGoalsText}>There is no goals yet. Try adding one clicking in button above.</Text>
        }
        <Goals goals={goals} removeGoal={removeGoal} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyGoalsText: {
    padding: 20,
    marginTop: 20
  }
});
