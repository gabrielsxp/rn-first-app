import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function GoalInput({ addGoal }) {
    const [text, setText] = useState('');
    return (
        <View style={styles.setGoals}>
            <TextInput value={text} onChangeText={text => setText(text)} style={styles.textInput} placeholder="Project Goal"></TextInput>
            <Button title="ADD" onPress={() => addGoal(text)} />
        </View>
    );
}

const styles = StyleSheet.create({
    setGoals: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    textInput: {
        padding: 3,
        borderWidth: 1,
        borderBottomColor: "black",
        marginRight: 20,
        minWidth: 200
    }
})