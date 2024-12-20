import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const BookDetail = ({ route }) => {
    const { book } = route.params;

    return (
        <ScrollView style={styles.container}>
            
            <View style={{alignItems:'center'}}>
                <Image source={{ uri: book.image }} style={styles.image} />
            </View>    
            <Text style={styles.title}>{book.nameProduct}</Text>
            <Text style={styles.nametg}>{book.price}</Text>
            
            <View style={styles.imgStar}>
                <Image
                    source={require('../img/Star.png')}
                    style={styles.star}
                />
                <Text style={{fontSize:20, color:'gray'}}>4.0</Text>
            </View>
            <View style={styles.items}>
                <Text style={styles.item}>Fantasy</Text>
                <Text style={styles.item}>Drama</Text>
                <Text style={styles.item}>Fiction</Text>
            </View>
            <View style={styles.btnBookDetail}>
                <TouchableOpacity style={styles.btnPlayAudio}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Play Audio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnReadBook}>
                    <Text style={{ color: '#4838D1', fontWeight: 'bold' }}>Read Book</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.description}>Summary</Text>
            <Text style={styles.description1}>{book.description}</Text>
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        paddingTop:5,
        paddingHorizontal: 20,
    },
    image: {
        width: 300,
        height: 230,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 0,
    },
    nametg:{
        fontSize: 16,
        color:'gray',
        marginBottom: 10,
    },
    items: {
        flexDirection: 'row',
    },
    item: {
        backgroundColor: 'white',
        borderColor: 'gray',
        fontSize:10,
        borderWidth:1,
        borderRadius: 10,
        padding: 2,
        paddingHorizontal:5,
        marginRight: 10,
        marginBottom:25,
        color: 'gray'
    },
    imgStar:{
        marginBottom:5,
        flexDirection:'row',
        alignItems:'center'
    },
    star:{
        marginRight:10
    },
    btnBookDetail:{
        flexDirection:'row',
        marginBottom:25
    },
    btnPlayAudio:{
        backgroundColor:'#4838D1',
        alignItems:'center',
        paddingVertical:10,
        marginRight:20,
        borderRadius:10,
        flex:1,
    },
    btnReadBook:{
        borderWidth:2,
        borderColor:"#4838D1",
        backgroundColor:'white',
        alignItems:'center',
        paddingVertical:10,
        borderRadius:10,
        flex:1
    },
    description: {
        fontSize: 16,
        marginBottom:5,
        fontWeight:'bold'
    },
    description1: {
        fontSize: 16,
        marginBottom:20,
    },

});

export default BookDetail;
