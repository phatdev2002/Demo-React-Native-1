import { useState } from "react";
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from "axios";

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const isFormValid = email == "" || password == "" || name == "";


     const handleRegister = () => {
        let formData = {
            email:email,
            password:password,
            name:name,
        }
        axios.post('https://vieclam.shop/register.php', formData)
        .then((response) => {
            console.log("Response Data:", response.data);

            if (response.data.status === false && response.data.message === "Email đã tồn tại") {
                Alert.alert(response.data.message); // Hiển thị "Email đã tồn tại"
                navigation.navigate("Home");
            } else if (response.data.status === true) {
                Alert.alert("Đăng ký thành công");
                // Điều hướng đến trang Home nếu cần
                navigation.navigate("Home");
            } else {
                Alert.alert("Đăng ký thất bại, vui lòng thử lại.");
            }
        })
        .catch((err) => {
            console.log("Chi tiết lỗi:", err);
            Alert.alert("Có lỗi xảy ra khi kết nối đến server. Vui lòng kiểm tra lại.");
        });
        
        //Alert.alert("Đăng nhập thành công");
        //navigation.navigate("Home");
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}></StatusBar>
            <View style={styles.imglogo}>
                <Image source={require("../img/logo.png")} style={styles.logo} />
            </View>

            <View style={styles.title}>
                <Text style={styles.registertext}>Register</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.group}>
                    <TextInput 
                        placeholder="Email" 
                        placeholderTextColor="#B8B8C7" 
                        style={styles.ip}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.group}>
                    <TextInput 
                        placeholder="Password" 
                        placeholderTextColor="#B8B8C7" 
                        style={styles.ip}
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <View style={styles.group}>
                    <TextInput 
                        placeholder="Name" 
                        placeholderTextColor="#B8B8C7" 
                        style={styles.ip}
                        value={name}
                        onChangeText={setName}
                    />
                </View>
            </View>
            <View style={styles.textagree}>
                <Text>By signing up, you agree to our </Text>
                <TouchableOpacity onPress={() => Alert.alert("Cập nhật sau")}><Text style={{ color: "#F77A55", fontWeight: "bold" }}>Terms</Text></TouchableOpacity>
                <Text>, </Text>
                <TouchableOpacity onPress={() => Alert.alert("Cập nhật sau")}><Text style={{ color: "#F77A55", fontWeight: "bold" }}>Data Policy</Text></TouchableOpacity>
                <Text> and </Text>
                <TouchableOpacity onPress={() => Alert.alert("Cập nhật sau")}><Text style={{ color: "#F77A55", fontWeight: "bold" }}>Cookies Policy</Text></TouchableOpacity>
                <Text>.</Text>
            </View>
            <TouchableOpacity 
                style={[styles.btnRegister, { backgroundColor: !isFormValid ? "#4838D1" : "#B8B8C7" }]}
                onPress={handleRegister}
                disabled={isFormValid}
            >
                <Text style={{ color: "white", fontWeight: "bold" }}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.btnCancel}
                //onPress={handleCancel}
            >
                <Text style={{ color: "#4838D1", fontWeight: "bold" }}>Cancel</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    imglogo: {
        marginTop: 20,
        alignItems: "center"
    },
    logo: {
        width: 100, 
        height: 100
    },
    title: {
        marginHorizontal: 30,
        marginBottom: 15
    },
    registertext: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#4838D1"
    },
    form: {
        marginRight: 30,
        marginLeft: 30
    },
    group: {},
    ip: {
        color: "gray",
        borderWidth: 1,
        borderColor: "#F5F5FA",
        backgroundColor: "#F5F5FA",
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 15
    },
    textagree: {
        flexDirection: "row", 
        justifyContent: "center",
        flexWrap: "wrap",
        marginHorizontal: 30
    },
    btnRegister: {
        marginHorizontal: 30,
        marginTop: 15,
        alignItems: "center",
        paddingVertical: 10,
        borderRadius: 10
    },
    btnCancel: {
        borderWidth: 2,
        borderColor: "#4838D1",
        backgroundColor: "white",
        marginHorizontal: 30,
        marginTop: 15,
        alignItems: "center",
        paddingVertical: 10,
        borderRadius: 10
    }
});

export default RegisterScreen;
