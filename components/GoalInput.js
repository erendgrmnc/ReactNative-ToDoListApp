import React from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";



const GoalInput = props => {

    return (

        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputSection}>
                <TextInput placeholder="Enter Task..." style={styles.textInput} onChangeText={props.goalInputHandler} value={props.enteredGoal} />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel}></Button>
                    </View>
                    <View style={styles.button}>
                        <Button style={styles.input} title="+" onPress={props.addGoalHandler} />
                    </View>



                </View>

            </View>
        </Modal>

    );
};


const styles = StyleSheet.create({
    inputSection: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    textInput: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        margin: 10

    },

    input: {
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        margin: 5,


    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%"
    },
    button: {
        width: "40%",
        
    }
})

export default GoalInput;

