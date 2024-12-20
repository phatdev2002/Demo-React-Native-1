import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import { launchImageLibrary,launchCamera } from 'react-native-image-picker';


const Camera = () => {

    const commonOptions = {
        mediaType: 'photo',
        maxWidth: 500,
        maxHeight: 500,
        };

////CHỤP ẢNH
const cameraOptions = {
  cameraType: 'front',
  saveToPhotos: true,
  ...commonOptions,
}; 
    const onOpenCamera = async () => {
      const response = await launchCamera(cameraOptions);
      if (response?.assets) {
        setImages(response.assets);
      } else {
        Alert.alert('Có lỗi xảy ra', response.errorMessage);
      }
    };
    ////LẤY ẢNH TỪ THƯ VIỆN
    const libraryOptions = {
      seletLimit: 10,
      ...commonOptions,
      };
      const [images, setImages] = useState();

    const onOpenLibrary = async () => {
        const response = await launchImageLibrary(libraryOptions);
        if (response?.assets) {
          setImages(response.assets);
        } else {
          Alert.alert('Có lỗi xảy ra', response.errorMessage);
        }
      };
        

    return (
        <View style={styles.container}>
            <Image
            source={{
              uri:
                images?.[0]?.uri ||
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png',
            }}
            style={styles.avatar}
          />
        <TouchableOpacity onPress={onOpenLibrary}>
          <Text
            style={{
              fontWeight: '800',
              padding: 10,
              backgroundColor: 'pink',
              borderRadius: 10,
              marginTop:20,
            }}>
            Chọn ảnh
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onOpenCamera}>
          <Text
            style={{
              fontWeight: '800',
              padding: 10,
              marginTop:20,
              backgroundColor: 'yellow',
              borderRadius: 10,
            }}>
            Chụp ảnh
          </Text>
        </TouchableOpacity>
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
    avatar: {
        width:200,
        height:200,
    }
});

export default Camera;
