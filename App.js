import React, { useState } from 'react';
import { View, Text, Image, Button, Alert, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
    const [answers, setAnswers] = useState(['', '', '']);
    const correctAnswers = ['Crocodile', 'Elephant', 'Deer'];

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
        <ImageBackground source={require('./assets/img/jungle.jpeg')} style={styles.backgroundImage}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Image source={require('./assets/img/frog.jpg')} style={styles.logo} />
                    <Text style={styles.headerText}>Animal Quiz</Text>
                </View>

                <Image source={require('./assets/img/crocodile.jpg')} style={styles.image} />
                <View style={styles.questionBox}>
                    <Text style={styles.questionText}>What animal is this?</Text>
                </View>
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

                <Image source={require('./assets/img/elephant.jpg')} style={styles.image} />
                <View style={styles.questionBox}>
                    <Text style={styles.questionText}>What animal is this?</Text>
                </View>
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

                <Image source={require('./assets/img/deer.jpg')} style={styles.image} />
                <View style={styles.questionBox}>
                    <Text style={styles.questionText}>What animal is this?</Text>
                </View>
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

                <View style={styles.button}>
                    <Button title="Submit Answers" color="#FF0000" onPress={submitAnswers} />
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // Ensure the background image covers the screen
    },
    container: {
        flexGrow: 1,
        padding: 16,
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    image: {
        width: '90%',
        height: 150,
        marginVertical: 10,
        borderRadius: 10,
    },
    questionBox: {
        backgroundColor: '#007bff',
        borderColor: 'black',
        borderWidth: 2,
        padding: 8,
        marginVertical: 8,
        borderRadius: 4,
        width: '90%',
        alignItems: 'center',
    },
    questionText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    picker: {
        height: 50,
        width: '90%',
        backgroundColor: '#e1e1e1',
        borderRadius: 8,
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#007bff',
        borderRadius: 8,
        marginTop: 20,
        width: '90%',
    },
});

export default App;
