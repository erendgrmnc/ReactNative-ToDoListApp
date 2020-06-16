import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = props => {

    return (
        <TouchableOpacity style={styles.listItem} onPress={props.onDelete}>
            <View >
                <Text>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({

    listItem: {
        marginTop: 10,
        padding: 10,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1
    }

});

export default GoalItem;

