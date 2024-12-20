import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Alert } from 'react-native';
import ListCategory from './list/ListCategory';

const HomeScreen = () => {
    
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <View style={styles.title1}>
                    <View style={styles.imglogo}>
                        <Image
                            source={require('../img/logo.png')}
                            style={styles.logo}
                        />
                    </View>
                    <Text style={styles.title11}>Audi</Text>
                    <Text style={styles.title12}>Books</Text>
                </View>
                <View>
                    <Image
                        source={require('../img/Setting.png')}
                        style={styles.imgsetting}
                    />
                </View>
            </View>
            <ListCategory />
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        marginHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title1: {
        flexDirection: 'row',
    },
    imglogo: {},
    logo: {
        width: 40,
        height: 40,
    },
    title11: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4838D1',
        marginRight: 1,
    },
    title12: {
        fontSize: 24,
        color: '#4838D1',
    },
    imgsetting: {
        width: 20,
        height: 20,
    },
});

export default HomeScreen;
