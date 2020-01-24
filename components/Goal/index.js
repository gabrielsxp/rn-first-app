import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
export default function Goal({ title }) {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        padding: 20,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 5,
        marginBottom: 20
    },
    text: {
        color: '#333',
        textAlign: 'center'
    }
});
