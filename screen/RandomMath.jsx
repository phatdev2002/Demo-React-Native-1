import React from 'react';

import { View,Text,StyleSheet,TextInput,Button} from "react-native";

const list = [
    {
        "so1": 1,
        "pheptinh": "+",
        "so2": 3,
        "ketqua": 4
    },
    {
        "so1": 3,
        "pheptinh": "-",
        "so2": 1,
        "ketqua": 2
    },
    {
        "so1": 5,
        "pheptinh": "*",
        "so2": 2,
        "ketqua": 10
    },
    {
        "so1": 8,
        "pheptinh": "/",
        "so2": 2,
        "ketqua": 4
    }
]

const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
};

const getRandomItemCon = () => {
    const randomIndexcon = Math.floor(Math.random() * 4) + 1;
    return randomIndexcon;
}



const RandomMath = () => {

    const [randomItem, setRandomItem] = React.useState(getRandomItem());
    const [randomItemcon, setRandomItemcon] = React.useState(getRandomItemCon());
    const [number, onChangeNumber] = React.useState('');
    const [result, setResult] = React.useState('');

    React.useEffect(() => {
        setRandomItem(getRandomItem());
        setRandomItemcon(getRandomItemCon());
    }, []);

    const renderMathProblem = () => {
        switch (randomItemcon) {
            case 1:
                return (
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Số"
                            keyboardType="numeric"
                        />
                        <Text> {randomItem.pheptinh} </Text>
                        <Text> {randomItem.so2} </Text>
                        <Text> = </Text>
                        <Text> {randomItem.ketqua} </Text>
                    </View>
                );
            case 2:
                return (
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <Text>{randomItem.so1}</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Phép tính"
                        />
                        <Text> {randomItem.so2} </Text>
                        <Text> = </Text>
                        <Text> {randomItem.ketqua} </Text>
                    </View>
                );
            case 3:
                return (
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <Text> {randomItem.so1} </Text>
                        <Text> {randomItem.pheptinh} </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Số"
                            keyboardType="numeric"
                        />
                        <Text>=</Text>
                        <Text> {randomItem.ketqua} </Text>
                    </View>
                );
            case 4:
                return (
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <Text> {randomItem.so1} </Text>
                        <Text> {randomItem.pheptinh} </Text> 
                        <Text> {randomItem.so2} </Text>
                        <Text> = </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Kết quả"
                            keyboardType="numeric"
                        />
                    </View>
                );
            default:
                return null;
        }
    };

    const checkAnswer = () => {
        let isCorrect = false;

        switch (randomItemcon) {
            case 1:
                isCorrect = parseInt(number) === randomItem.so1;
                break;
            case 2:
                const validOperations = { "+": "+", "-": "-", "*": "*", "/": "/" };
                isCorrect = number === randomItem.pheptinh;
                break;
            case 3:
                isCorrect = parseInt(number) === randomItem.so2;
                break;
            case 4:
                isCorrect = parseInt(number) === randomItem.ketqua;
                break;
            default:
                isCorrect = false;
        }

        if (isCorrect) {
            setResult('Chính xác');
        } else {
            setResult('Sai rồi');
        }
    }
    const ChangeMath = () => {
        setRandomItem(getRandomItem());
        setRandomItemcon(getRandomItemCon());
        //setNumber('');
        setResult('');
    };

    return(
        <View style={styles.container}>
            <Text>Giải nghĩa:</Text>
            <Text>Phép tính:</Text>
            <Text style={styles.item}>
                {randomItem.so1} {randomItem.pheptinh} {randomItem.so2} = {randomItem.ketqua}
            </Text>
            <Text>Random ẩn thông tin tại vị trí thứ: {randomItemcon}</Text>
            {renderMathProblem(randomItem,randomItemcon)}
            <Button title="Kiểm tra" onPress={checkAnswer} />
            <Text style={styles.result}>{result}</Text>
            <Button title="Đổi bài khác" onPress={ChangeMath} />
        </View>
    )
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    result: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
    },
});


export default RandomMath;