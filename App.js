import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [addMenuActive, setAddMenuActive] = useState(false);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
    
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]);
    setAddMenuActive(false); 
    setEnteredGoal(""); 
  }



  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {

      console.log(goalId);
      return currentGoals.filter((goal) => goal.id !== goalId)

    });
  } 

  const cancelAddMenuHandler = () =>{
    setAddMenuActive(false);
  }


  return (

    <View style={styles.screen}>
      <Button title="Add New ToDo" onPress={() => setAddMenuActive(true)} />
      <GoalInput visible={addMenuActive} goalInputHandler={goalInputHandler} enteredGoal={enteredGoal} addGoalHandler={addGoalHandler} onCancel= {cancelAddMenuHandler} />

      <View>
        <FlatList
          keyExtractor = {(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem title={itemData.item.value} onDelete={removeGoalHandler.bind(this,itemData.item.id)} />
          )}
        />

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,

  },






});
