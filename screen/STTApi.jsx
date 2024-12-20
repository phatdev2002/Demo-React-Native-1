import {StyleSheet, Text, TouchableOpacity, View, Alert, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import DocumentPicker from 'react-native-document-picker';

const CallAPI = () => {
  const [textdata, setTextData] = useState('Chọn một tệp để bắt đầu');
  const [loading, setLoading] = useState(false);

  // Hàm mở tệp
  const openFile = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.audio],
      });
      console.log('Đường dẫn tệp: ', result[0].name);

      if (result) {
        API_Speech(result[0]);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Thông báo', 'Không có tệp nào được chọn.');
      } else {
        Alert.alert('Lỗi', 'Đã xảy ra lỗi trong quá trình chọn tệp.');
      }
    }
  };

  // Gọi API để chuyển đổi âm thanh thành văn bản
  const API_Speech = async (file) => {
    setLoading(true);
    let form = new FormData();
    form.append('file', {
      uri: file.uri,
      type: file.type,
      name: file.name,
    });

    try {
      const response = await axios.post('https://api.fpt.ai/hmi/asr/general', form, {
        headers: {
          'api-key': 'MTRSVPIdA40YoISclrYKQtgQVcl9UV8r',
          'Content-Type': 'multipart/form-data',
        },
      });
      setTextData(response.data.hypotheses[0].utterance);
    } catch (error) {
      setTextData('Đã xảy ra lỗi khi xử lý tệp.');
      console.log('API Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={openFile} style={styles.button}>
          <Text style={styles.buttonText}>Chọn Tệp</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="gray" />
        ) : (
          <Text style={styles.text}>{textdata}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 50,
  },
  button: {
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: '800',
    color: 'white',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
});

export default CallAPI;
