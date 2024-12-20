import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Alert } from 'react-native';

const TTS = () => {
    axios.post(
        'https://api.fpt.ai/hmi/tts/v5',
        "Xin chào các bạn" ,  // example payload if required by API
        {
            headers: {
                'api-key': 'MTRSVPIdA40YoISclrYKQtgQVcl9UV8r',
                'voice': 'minhquang'
            }
        }
    )
    .then(function (response) {
        console.log(response.data); // response data here
    })
    .catch(function (error) {
        console.log(error);
    });

    return (
        <View style={styles.container}>
            <Text>Text-to-Speech API Call</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TTS;
