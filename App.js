import React, { useState } from 'react';
import { View, Text, Image, Button, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
    const [answers, setAnswers] = useState(['', '', '']);
    const correctAnswers = ['Crocodile', 'Elephant', 'Deer']; // Updated to match the images used

    const handleAnswerChange = (value, index) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const submitAnswers = () => {
        let correctCount = 0;
        answers.forEach((answer, index) => {
            if (answer === correctAnswers[index]) {
                correctCount += 1;
            }
        });
        Alert.alert(`You have ${correctCount} correct answers!`);
    };

    return (
        <View style={styles.container}>
            {/* Question 1 */}
            <Image source={require('./assets/img/crocodile.jpg')} style={styles.image} />
            <Text>What animal is this?</Text>
            <Picker
                selectedValue={answers[0]}
                style={styles.picker}
                onValueChange={(itemValue) => handleAnswerChange(itemValue, 0)}
            >
                <Picker.Item label="Select an item..." value="" />
                <Picker.Item label="Crocodile" value="Crocodile" />
                <Picker.Item label="Tiger" value="Tiger" />
                <Picker.Item label="Buffalo" value="Buffalo" />
            </Picker>

            {/* Question 2 */}
            <Image source={require('./assets/img/elephant.jpg')} style={styles.image} />
            <Text>What animal is this?</Text>
            <Picker
                selectedValue={answers[1]}
                style={styles.picker}
                onValueChange={(itemValue) => handleAnswerChange(itemValue, 1)}
            >
                <Picker.Item label="Select an item..." value="" />
                <Picker.Item label="Zebra" value="Zebra" />
                <Picker.Item label="Owl" value="Owl" />
                <Picker.Item label="Elephant" value="Elephant" />
            </Picker>

            {/* Question 3 */}
            <Image source={require('./assets/img/deer.jpg')} style={styles.image} />
            <Text>What animal is this?</Text>
            <Picker
                selectedValue={answers[2]}
                style={styles.picker}
                onValueChange={(itemValue) => handleAnswerChange(itemValue, 2)}
            >
                <Picker.Item label="Select an item..." value="" />
                <Picker.Item label="Squirrel" value="Squirrel" />
                <Picker.Item label="Deer" value="Deer" />
                <Picker.Item label="Hummingbird" value="Hummingbird" />
            </Picker>

            {/* Submit Button */}
            <Button title="Submit Answers" onPress={submitAnswers} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 150,
        marginVertical: 10,
    },
    picker: {
        height: 50,
        width: '100%',
        marginVertical: 10,
    },
});

export default App;

