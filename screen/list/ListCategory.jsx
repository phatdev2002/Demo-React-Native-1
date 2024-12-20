import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from "react-native";


import axios from "axios";
const ListCategory = () => {
    const navigation = useNavigation();
    // const dataimg = [
    //     { id: 1, title: 'The Silence of the year', nametg: 'Doraemon', image: require('../../img/img1.png'), description: 'sdfs wefw è ger gerg vdvfdv gfer ger gre wgeaf svxcvxc ergbve rgbbe bêrb' },
    //     { id: 2, title: 'The Speaker on the beat',nametg: 'Conana', image: require('../../img/img2.png'), description: 'tuy tyyr tycvb c cb cvcv uy ky d gsdf f wef wfs df  sdf sdfht rhb ' },
    //     { id: 3, title: 'Thiên thần hộ mệnh', nametg: 'The Dracula', image: require('../../img/img3.jpg'), description: 'sdfs wefw è ger gerg vdvfdv gfer ger gre wgeaf svxcvxc ergbve rgbbe bêrb' },
    //     { id: 4, title: 'Iron man and Avenger',nametg: 'Mavel Studio', image: require('../../img/img4.jpg'), description: 'tuy tyyr tycvb c cb cvdgf zdgfcv uy ky d gsdf f wef wfs df  sdf sdfht rhb ' },
    //     { id: 5, title: 'Khóa chặt cửa nào Suzume',nametg: 'Makoto Shinkai', image: require('../../img/img5.jpg'), description: 'dzgf ưer wcxv tuy tyyr tycvb c cb cvcv uy ky d gsdf f wef wfs df  sdf sdfht rhb ' },

    // ];

    const [dataCate, setDataCate] = useState([]);
    const [idCate1, setIdCate] = useState(1);


    useEffect(() => {
        // Fetch data from API
        axios.get('https://vieclam.shop/list-category.php')
            .then(response => {
                setDataCate(response.data); // Assuming API response format is compatible
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const [dataimg, setDataimg] = useState([]);

    useEffect(() => {
        // Fetch data from API
        axios.get(`https://vieclam.shop/list-product-by-cate.php?id=${idCate1}`)
            .then(response => {
                setDataimg(response.data); // Assuming API response format is compatible
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [idCate1]);
    
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginVertical: 20 }}>
                <Text>Category</Text>
                <Text style={{ color: '#4838D1' }}>See more</Text>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.items}>

                <FlatList

                    data={dataCate}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.itemButton}
                        onPress={() => setIdCate(item.idCate)}
                        >
                            <Text style={styles.itemText}>{item.nameCate}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.idCate.toString()}
                    horizontal
                    scrollEnabled={false}
                />
            </ScrollView>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginVertical: 20 }}>
                <Text>Recommended for you</Text>
                <Text style={{ color: '#4838D1' }}>See more</Text>
            </View>

            <FlatList 
                data={dataimg} 
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.imgitems}
                        // @ts-ignore
                        onPress={() => navigation.navigate('BookDetail', { book: item })}
                    >
                        <Image source={{ uri: item.image }} style={styles.imgitem} />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.idProduct.toString()}
                horizontal
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    items: {
        flexDirection: 'row',
        marginHorizontal: 30,
        paddingRight: 40
    },
    itemButton:{

    },
    itemText: {
        backgroundColor: '#F5F5FA',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical:5,
        marginRight: 10,
        color: '#6a6a6a'
    },
    imgitems: {
        marginHorizontal: 10,
    },
    imgitem: {
        width: 100,
        height: 200,
    },
});

export default ListCategory;
