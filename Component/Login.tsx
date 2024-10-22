import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const navigation = useNavigation();

    const [name , updateName] = useState("");
    const obj = {
        name: name,
        age: 21,
        gender: "male"
    }
    const navigateToDestinationScreen = () => {
        navigation.navigate("Home", obj);
    }
    return (
        <>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>Login Screen</Text>

                <TextInput placeholder='Enter Your Name : ' style={{ fontSize: 18, fontWeight: "bold", borderColor: "black", borderWidth: 3 , borderRadius :10 , padding :10 }} onChangeText={(type)=> {updateName(type)}} />

                <Button title='Home Screen' onPress={() => { navigateToDestinationScreen() }} />
            </View>
        </>
    );
}
export default Login;
