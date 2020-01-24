import React from 'react';
import Goal from '../Goal/index';
import { FlatList, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default function Goals({ goals, removeGoal }) {
    return (
        <FlatList data={goals} renderItem={goal => <View style={styles.eachGoal}>
            <TouchableOpacity onPress={() => removeGoal(goal.index)}>
                <Goal title={goal.item.text} />
            </TouchableOpacity>
        </View>
        }>
        </FlatList>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        padding: 20,
        maxHeight: 60,
        borderRadius: 5
    },
    eachGoal: {
        display: 'flex',
        padding: 20
    },
    goalsContainer: {
        width: '100%'
    }
});